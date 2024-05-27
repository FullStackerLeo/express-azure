const Article = require('../models/Article');

module.exports = class ArticleService {
    static async getAllArticles() {
        try{
            const allArticles = await Article.find();
            return allArticles;
        }catch (e) {
            console.log(e);
        }
    }

    static async createArticle(data) {
        try{
            const newArticle = {
                uid: 'data.title',
                cid: 'data.userid',
                content: 'data.content',
            }
            const response = await new Article(newArticle).save();
            return response;
        }catch (e) {
            console.log(e);
        }
    }

    static async getArticleById(id) {
        try{
            const singleArticleResponse = await Article.findById({_id: article});
            return singleArticleResponse;
        }catch (e) {
            console.log(e);
        }
    }

    static async updateArticle(title, body, articleImage) {
        try{
            const updateResponse = await Article.updateOne(
                {title, body, articleImage},
                {$set: {date: new Date.now()}});
                return updateResponse;
            }catch(error){
            console.log(error);
        }
    }

    static async deleteArticle(aritcleId) {
        try{
            const deletedResponse = await Article.findOneAndDelete(articleId);
            return deletedResponse;
        }catch (e) {
            console.log(e);
        }
    }
}