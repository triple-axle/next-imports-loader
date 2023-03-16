import dynamic from 'next/dynamic'

const Here = dynamic(() => import(`../components/map`), { ssr: false })

export default function Home() {
  return (
    <div>
      <Here />
    </div>
  )
}
