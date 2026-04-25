import Link from 'next/link';
import styles from './page.module.css';

const templates = [
  { id: '1', name: '商品主图-简约白底', type: 'main', uses: 234, updated: '2天前' },
  { id: '2', name: '商品主图-高级灰', type: 'main', uses: 156, updated: '3天前' },
  { id: '3', name: '场景图-家居风格', type: 'scene', uses: 189, updated: '1天前' },
  { id: '4', name: '场景图-户外旅行', type: 'scene', uses: 98, updated: '5天前' },
  { id: '5', name: '营销海报-促销活动', type: 'poster', uses: 312, updated: '今天' },
  { id: '6', name: '营销海报-新品上市', type: 'poster', uses: 245, updated: '昨天' },
  { id: '7', name: '详情页-多图展示', type: 'detail', uses: 178, updated: '4天前' },
  { id: '8', name: '社交-小红书种草', type: 'social', uses: 421, updated: '今天' },
];

const typeLabels: Record<string, string> = {
  main: '商品主图',
  scene: '场景图',
  poster: '营销海报',
  detail: '详情页',
  social: '社交媒体',
};

export default function TemplatesPage() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.headerContent}>
          <Link href="/" className={styles.logo}>
            <span className={styles.logoIcon}>墨</span>
            <span className={styles.logoText}>墨圆AI生图</span>
          </Link>
          <nav className={styles.nav}>
            <Link href="/" className={styles.navItem}>首页</Link>
            <Link href="/projects" className={styles.navItem}>项目</Link>
            <Link href="/templates" className={styles.navItem}>模板</Link>
            <Link href="/settings" className={styles.navItem}>设置</Link>
          </nav>
          <div className={styles.headerActions}>
            <button className={styles.btnPrimary}>
              新建模板
            </button>
          </div>
        </div>
      </header>

      <main className={styles.main}>
        <div className={styles.pageHeader}>
          <h1 className={styles.title}>模板中心</h1>
          <p className={styles.subtitle}>管理和使用你的图片生成模板</p>
        </div>

        <div className={styles.filters}>
          <button className={`${styles.filterBtn} ${styles.active}`}>全部</button>
          <button className={styles.filterBtn}>商品主图</button>
          <button className={styles.filterBtn}>场景图</button>
          <button className={styles.filterBtn}>营销海报</button>
          <button className={styles.filterBtn}>详情页</button>
          <button className={styles.filterBtn}>社交媒体</button>
        </div>

        <div className={styles.templatesGrid}>
          {templates.map((tmpl) => (
            <div key={tmpl.id} className={styles.templateCard}>
              <div className={styles.templatePreview}>
                <span className={styles.templateIcon}>
                  {tmpl.type === 'main' && '◫'}
                  {tmpl.type === 'scene' && '◬'}
                  {tmpl.type === 'poster' && '◮'}
                  {tmpl.type === 'detail' && '◭'}
                  {tmpl.type === 'social' && '◯'}
                </span>
              </div>
              <div className={styles.templateInfo}>
                <h3 className={styles.templateName}>{tmpl.name}</h3>
                <span className={styles.templateType}>{typeLabels[tmpl.type]}</span>
                <div className={styles.templateMeta}>
                  <span>{tmpl.uses} 次使用</span>
                  <span>·</span>
                  <span>{tmpl.updated}</span>
                </div>
              </div>
              <div className={styles.templateActions}>
                <button className={styles.actionBtn}>使用</button>
                <button className={styles.actionBtn}>编辑</button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}