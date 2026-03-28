// 路径: src/components/LikeButton.tsx

// 🚀 核心魔法：这行指令告诉 Next.js，这个组件包含交互，
// 请把它的 JS 代码打包发给浏览器运行！
'use client'

import { useState } from 'react'

export default function LikeButton() {
  // 就像 Vue 里的 const likes = ref(0)
  const [likes, setLikes] = useState(0)

  return (
    <button
      onClick={() => setLikes(likes + 1)}
      className="rounded-md bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
    >
      👍 点赞 ({likes})
    </button>
  )
}