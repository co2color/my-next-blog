// 路径: src/app/detail/[id]/page.tsx

// ⚠️ 注意：这里没有 'use client'。
// 默认情况下，它是一个纯粹的服务端组件。它的 JS 代码永远不会发送到浏览器。

import LikeButton from '@/components/LikeButton'

// 模拟一个数据库查询函数
async function fetchArticleFromDB(id: string) {
  // 假装我们在连 MySQL/PostgreSQL，耗时 1 秒
  await new Promise(resolve => setTimeout(resolve, 1000))
  return {
    title: `这是第 ${id} 号文章的震撼标题`,
    content: '这是一段非常长的文章正文，包含了深度的技术解析。这些内容在服务器上就已经拼接成了 HTML，对 SEO 极其友好。'
  }
}

// 定义路由参数的类型，让代码更整洁
type Props = {
  params: Promise<{ id: string }>
}

// 页面组件通过 Props 接收参数
export default async function DetailPage({ params }: Props) {
  
  // 在最新的 Next.js (15+) 规范中，params 是一个 Promise，需要 await
  const { id } = await params 

  // 直接在组件里写后端逻辑，查询数据库！
  const article = await fetchArticleFromDB(id)

  return (
    <main className="mx-auto max-w-2xl p-8">
      {/* 这一块都是静态内容，直接在服务端生成 HTML 直出 */}
      <h1 className="text-3xl font-bold">{article.title}</h1>
      <p className="mt-4 text-gray-600">{article.content}</p>
      
      <div className="mt-8 border-t pt-8">
        {/* 这里混入了一个客户端组件！ */}
        <p className="mb-4 text-sm text-gray-500">觉得文章不错？点个赞吧：</p>
        <LikeButton likeData={{ count: 3, name: '用户A' }} />
      </div>
    </main>
  )
}
