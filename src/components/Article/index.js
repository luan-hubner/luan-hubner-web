import s from './style.module.css'

export default function Article({ article }) {
  return (
    <a href={`/articles/${article.tag}`}>
      <div className={s.article}>
        <div className={s.apresentation}>
          <img src={article.image} alt="article-preview" />
        </div>

        <div className={s.details}>
          <span className={s.title}>{article.title}</span>
          <span className={s.subtitle}>{article.description}</span>
          <span className={s.date}>{article.date}</span>
        </div>
      </div>
    </a>
  )
}
