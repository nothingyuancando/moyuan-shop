import Link from 'next/link';
import styles from './page.module.css';

const projects = [
  { id: '1', name: '2024夏季新品', brand: '时尚服饰', products: 24, tasks: 89, updated: '2分钟前', status: 'active' },
  { id: '2', name: '智能家居系列', brand: '科技生活', products: 56, tasks: 234, updated: '1小时前', status: 'active' },
  { id: '3', name: '美妆护肤', brand: '美丽在线', products: 38, tasks: 156, updated: '3小时前', status: 'active' },
  { id: '4', name: '母婴用品', brand: '宝贝成长', products: 42, tasks: 198, updated: '昨天', status: 'paused' },
];

export default function ProjectsPage() {
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
            <Link href="/projects/new" className={styles.btnPrimary}>
              新建项目
            </Link>
          </div>
        </div>
      </header>

      <main className={styles.main}>
        <div className={styles.pageHeader}>
          <h1 className={styles.title}>我的项目</h1>
          <p className={styles.subtitle}>管理你的电商图片项目</p>
        </div>

        <div className={styles.projectsGrid}>
          {projects.map((project) => (
            <Link key={project.id} href={`/projects/${project.id}`} className={styles.projectCard}>
              <div className={styles.projectHeader}>
                <div className={styles.projectAvatar}>
                  {project.name.charAt(0)}
                </div>
                <span className={`${styles.projectStatus} ${styles[project.status]}`}>
                  {project.status === 'active' ? '进行中' : '已暂停'}
                </span>
              </div>
              <h3 className={styles.projectName}>{project.name}</h3>
              <span className={styles.projectBrand}>{project.brand}</span>
              <div className={styles.projectStats}>
                <span>{project.products} 个商品</span>
                <span>·</span>
                <span>{project.tasks} 个任务</span>
              </div>
              <div className={styles.projectFooter}>
                <span className={styles.projectUpdated}>最后更新：{project.updated}</span>
              </div>
            </Link>
          ))}

          <Link href="/projects/new" className={styles.addProjectCard}>
            <span className={styles.addIcon}>+</span>
            <span className={styles.addText}>创建新项目</span>
          </Link>
        </div>
      </main>
    </div>
  );
}