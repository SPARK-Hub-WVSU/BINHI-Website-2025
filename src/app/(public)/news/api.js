export async function getArticle(id) {
    return await fetch(`/api/article-data?id=${id}`)
        .then(res => res.json())
}