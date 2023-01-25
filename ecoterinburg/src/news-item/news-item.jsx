export default function NewsItem({text, date}) {
    return (
        <div className="blog1">
            <p>{date}</p>
            <p>{text}</p>
            {/* <img id="blog" src="/img/blog1.png"/> */}
        </div>
    )
}