'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import styles from './page.module.css';

const imageTypes = [
  { id: 'main', name: '商品主图', icon: '◫', desc: '白底高清图，适合淘宝、京东等平台', color: '#3B82F6' },
  { id: 'scene', name: '场景图', icon: '◬', desc: '融入生活场景，提升商品表现力', color: '#8B5CF6' },
  { id: 'detail', name: '详情页', icon: '◭', desc: '多图连续叙述，完整展示商品卖点', color: '#10B981' },
  { id: 'poster', name: '营销海报', icon: '◮', desc: '活动推广物料，引流转化', color: '#F59E0B' },
  { id: 'social', name: '社交媒体', icon: '◯', desc: '小红书、抖音、Instagram种草图', color: '#EC4899' },
];

const sizes = [
  { id: '1024x1024', name: '1:1 方形', desc: '适合主图、详情页' },
  { id: '1024x1792', name: '9:16 竖版', desc: '适合抖音、小红书' },
  { id: '1792x1024', name: '16:9 横版', desc: '适合海报、Banner' },
  { id: '1024x1536', name: '2:3 竖向', desc: '适合Instagram' },
];

export default function NewProjectPage() {
  const router = useRouter();

  const [selectedType, setSelectedType] = useState('main');
  const [selectedSize, setSelectedSize] = useState('1024x1024');
  const [prompt, setPrompt] = useState('');
  const [productName, setProductName] = useState('');
  const [productDesc, setProductDesc] = useState('');

  const handleSubmit = () => {
    router.push('/projects');
  };

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
            <Link href="/projects" className={styles.btnSecondary}>
              取消
            </Link>
          </div>
        </div>
      </header>

      <main className={styles.main}>
        <div className={styles.formContainer}>
          <h1 className={styles.title}>新建生成任务</h1>
          <p className={styles.subtitle}>选择图片类型，填写商品信息，开始AI生图</p>

          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>选择图片类型</h2>
            <div className={styles.typeGrid}>
              {imageTypes.map((type) => (
                <button
                  key={type.id}
                  className={`${styles.typeCard} ${selectedType === type.id ? styles.selected : ''}`}
                  onClick={() => setSelectedType(type.id)}
                  style={{ '--type-color': type.color } as React.CSSProperties}
                >
                  <span className={styles.typeIcon} style={{ color: type.color }}>{type.icon}</span>
                  <span className={styles.typeName}>{type.name}</span>
                  <span className={styles.typeDesc}>{type.desc}</span>
                </button>
              ))}
            </div>
          </div>

          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>选择尺寸</h2>
            <div className={styles.sizeGrid}>
              {sizes.map((size) => (
                <button
                  key={size.id}
                  className={`${styles.sizeCard} ${selectedSize === size.id ? styles.selected : ''}`}
                  onClick={() => setSelectedSize(size.id)}
                >
                  <span className={styles.sizeName}>{size.name}</span>
                  <span className={styles.sizeDesc}>{size.desc}</span>
                </button>
              ))}
            </div>
          </div>

          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>商品信息</h2>
            <div className={styles.formGroup}>
              <label className={styles.label}>商品名称</label>
              <input
                type="text"
                className={styles.input}
                placeholder="输入商品名称"
                value={productName}
                onChange={(e) => setProductName(e.target.value)}
              />
            </div>
            <div className={styles.formGroup}>
              <label className={styles.label}>商品描述</label>
              <textarea
                className={styles.textarea}
                placeholder="描述商品特点、卖点、使用场景等"
                value={productDesc}
                onChange={(e) => setProductDesc(e.target.value)}
                rows={4}
              />
            </div>
          </div>

          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>生成描述</h2>
            <div className={styles.formGroup}>
              <label className={styles.label}>Prompt提示词</label>
              <textarea
                className={styles.textarea}
                placeholder="描述你想要的图片效果，例如：现代简约风格，清新配色，商品居中展示，背景纯白..."
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                rows={6}
              />
            </div>
          </div>

          <div className={styles.actions}>
            <button className={styles.btnPrimary} onClick={handleSubmit}>
              开始生成
            </button>
            <Link href="/projects" className={styles.btnSecondary}>
              取消
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}