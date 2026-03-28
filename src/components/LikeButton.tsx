// 路径: src/components/LikeButton.tsx

// 🚀 核心魔法：这行指令告诉 Next.js，这个组件包含交互，
// 请把它的 JS 代码打包发给浏览器运行！
'use client'

import { useState } from 'react'

// 定义传入对象的类型
interface LikeData {
  count: number
  name: string
}

export default function LikeButton(options: { likeData: LikeData }) {
  // 使用对象里的 count 作为初始状态
  const [likes, setLikes] = useState(options.likeData.count)

  return (
    <div className="flex flex-col gap-2">
      <p className="text-sm text-gray-600">来自 {options.likeData.name} 的点赞：</p>
      <button
        onClick={() => setLikes(likes + 1)}
        className="w-fit rounded-md bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
      >
        👍 点赞 ({likes})
      </button>
    </div>
  )
}