import News from "../models/News.js";

export const createNews = async (req, res, next) => {
  const newNews = new News(req.body);
  try {
    const savedNews = await newNews.save();
    res.status(200).json(savedNews);
  } catch (error) {
    next(error);
  }
};

export const updateNews = async (req, res, next) => {
  try {
    const updatedNews = await News.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedNews);
  } catch (error) {
    next(error);
  }
};

export const deleteNews = async (req, res, next) => {
  try {
    const deletedNews = await News.findByIdAndDelete(req.params.id);
    res.status(200).json("News Deleted Successfully!");
  } catch (error) {
    next(error);
  }
};

export const getNews = async (req, res, next) => {
  try {
    const news = await News.findById(req.params.id);
    res.status(200).json(news);
  } catch (error) {
    next(error);
  }
};

export const getAllNews = async (req, res, next) => {
  const queryLatestNews = req.query.latest;
  const queryPopularNews = req.query.popular;
  const queryCategory = req.query.category;
  const isFeatured = req.query.isFeatured === "true";
  const isFlash = req.query.isFlash === "true";
  try {
    let allNews;
    if (isFeatured) {
      allNews = await News.find({ isFeatured })
        .sort({ createdAt: -1 })
        .limit(1);
    } else if (isFlash) {
      allNews = await News.find({ isFlash }).sort({ createdAt: -1 }).limit(1);
    } else if (queryLatestNews) {
      allNews = await News.find().sort({ createdAt: -1 }).limit(4);
    } else if (queryPopularNews) {
      allNews = await News.find().sort({ createdAt: -1 }).limit(6);
    } else if (queryCategory) {
      allNews = await News.find({
        categories: {
          $in: [queryCategory],
        },
      }).sort({ createdAt: -1 });
    } else {
      allNews = await News.find().sort({ createdAt: -1 });
    }
    res.status(200).json(allNews);
  } catch (error) {
    next(error);
  }
};
