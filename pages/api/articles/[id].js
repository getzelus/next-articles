import {articles} from '../../../data';

export default function handler(req, res)  {
    let id = req.query.id;
    let article = articles.find(e => e.id === id);

    if (article) {
        res.status(200).json(article);
    }else{
        let message = 'Article ' + id + ' not found.'
        res.status(404).json({error: message});
    }
}