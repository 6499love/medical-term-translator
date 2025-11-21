
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export type Language = 'zh-CN' | 'en-US';

interface LanguageState {
  language: Language;
  setLanguage: (lang: Language) => void;
}

export const useLanguageStore = create<LanguageState>()(
  persist(
    (set) => ({
      language: 'zh-CN',
      setLanguage: (lang) => set({ language: lang }),
    }),
    {
      name: 'mtt_language',
    }
  )
);

const translations = {
  'zh-CN': {
    // Layout
    APP_TITLE: 'MediTerm',
    APP_SUBTITLE: '医学术语翻译',
    NAV_TRANSLATE: '翻译',
    NAV_DICTIONARY: '词典',
    NAV_BATCH: '批量',
    NAV_SAVED: '收藏',
    NAV_HISTORY: '历史',
    NAV_SETTINGS: '设置',
    FOOTER_NOTE: '100% 客户端安全。数据仅存储在浏览器中。',
    
    // Translator
    HEADER_TITLE: '医学翻译器',
    HEADER_SUBTITLE: '离线搜索 {count} 个医学术语。',
    INPUT_PLACEHOLDER: '输入中文术语、英文定义或拼音...',
    NO_MATCH: '未找到 "{query}"',
    BTN_ADD_TO_DICT: '添加到词典',
    BEST_MATCH: '最佳匹配',
    BTN_PRONOUNCE: '发音',
    BTN_COPY: '复制',
    BTN_TRANSLATE_ACTION: '翻译',
    MODAL_TITLE: '添加新术语',
    LBL_CHINESE_TERM: '中文术语 *',
    LBL_ENGLISH_DEF: '英文定义 *',
    LBL_PINYIN_FULL: '完整拼音',
    LBL_PINYIN_FIRST: '拼音首字母',
    LBL_CATEGORY: '分类',
    LBL_NOTE_USAGE: '备注 / 用法',
    BTN_CANCEL: '取消',
    BTN_SAVE: '保存术语',
    AVOID: '避免使用',
    SOURCE_USER: '用户',
    SOURCE_SYSTEM: '系统',

    // Batch
    BATCH_TITLE: '批量翻译',
    LBL_INPUT: '输入 (每行一个术语)',
    PLACEHOLDER_INPUT: '例如：\n背板升降\n高血压',
    BTN_TRANSLATE_ALL: '全部翻译',
    LBL_RESULTS: '结果',
    BTN_EXPORT: '导出 CSV',
    EMPTY_RESULTS: '结果将显示在这里',
    NOT_FOUND: '未找到',

    // Dictionary
    DICT_TITLE: '术语词典',
    TAB_SYSTEM: '系统词库',
    TAB_USER: '我的词典',
    DICT_COUNT: '{count} 个术语',
    FILTER_PLACEHOLDER: '筛选术语...',
    EMPTY_DICT: '未找到术语。',
    EMPTY_USER_DICT: '您还没有添加任何术语。',
    LBL_ADDED: '添加于: {date}',
    BTN_EXPORT_JSON: '导出词典',
    BTN_IMPORT_JSON: '导入词典',
    IMPORT_SUCCESS: '成功导入 {count} 个新术语。',
    IMPORT_ERROR: '文件格式无效或 JSON 解析失败。',
    IMPORT_NO_DATA: '文件中未找到有效术语。',
    BTN_PREV: '上一页',
    BTN_NEXT: '下一页',
    PAGE_INFO: '第 {current} / {total} 页',
    DETAIL_TITLE: '术语详情',
    BTN_CLOSE: '关闭',

    // History
    HIST_TITLE: '历史记录',
    BTN_CLEAR_ALL: '清除全部',
    EMPTY_HIST: '暂无搜索记录。',
    NO_MATCH_TEXT: '无匹配',

    // Favorites
    SAVED_TITLE: '收藏术语',
    EMPTY_SAVED: '暂无收藏。',

    // Settings
    SETTINGS_TITLE: '设置',
    SET_FUZZY: '模糊搜索灵敏度',
    SET_FUZZY_DESC: '调整匹配的精确度 (越低越严格)',
    SET_AUTOPLAY: '自动播放音频',
    SET_AUTOPLAY_DESC: '选中时自动朗读定义',
    SET_AUTOCOPY: '自动复制最佳翻译',
    SET_AUTOCOPY_DESC: '按回车键或点击翻译时自动复制结果',
    SET_NOTE: '注意：所有数据均存储在浏览器的 LocalStorage 中。清除浏览器缓存将删除您的自定义词典和设置。',

    // Toasts
    TOAST_COPY_SUCCESS: '已复制到剪贴板',
    TOAST_COPY_FAIL: '复制失败，请手动复制',
  },
  'en-US': {
    // Layout
    APP_TITLE: 'MediTerm',
    APP_SUBTITLE: 'Medical Translator',
    NAV_TRANSLATE: 'Translate',
    NAV_DICTIONARY: 'Dictionary',
    NAV_BATCH: 'Batch',
    NAV_SAVED: 'Saved',
    NAV_HISTORY: 'History',
    NAV_SETTINGS: 'Settings',
    FOOTER_NOTE: '100% Client-side secure. No data leaves your browser.',

    // Translator
    HEADER_TITLE: 'Medical Translator',
    HEADER_SUBTITLE: 'Instant offline search across {count} medical terms.',
    INPUT_PLACEHOLDER: 'Enter Chinese term, English definition, or Pinyin...',
    NO_MATCH: 'No match found for "{query}"',
    BTN_ADD_TO_DICT: 'Add to Dictionary',
    BEST_MATCH: 'Best Match',
    BTN_PRONOUNCE: 'Pronounce',
    BTN_COPY: 'Copy',
    BTN_TRANSLATE_ACTION: 'Translate',
    MODAL_TITLE: 'Add New Term',
    LBL_CHINESE_TERM: 'Chinese Term *',
    LBL_ENGLISH_DEF: 'English Definition *',
    LBL_PINYIN_FULL: 'Pinyin Full',
    LBL_PINYIN_FIRST: 'Pinyin First Letter',
    LBL_CATEGORY: 'Category',
    LBL_NOTE_USAGE: 'Note / Usage',
    BTN_CANCEL: 'Cancel',
    BTN_SAVE: 'Save Term',
    AVOID: 'Avoid',
    SOURCE_USER: 'USER',
    SOURCE_SYSTEM: 'SYSTEM',

    // Batch
    BATCH_TITLE: 'Batch Translation',
    LBL_INPUT: 'Input (One term per line)',
    PLACEHOLDER_INPUT: 'e.g.\n背板升降\n高血压',
    BTN_TRANSLATE_ALL: 'Translate All',
    LBL_RESULTS: 'Results',
    BTN_EXPORT: 'Export CSV',
    EMPTY_RESULTS: 'Results will appear here',
    NOT_FOUND: 'Not Found',

    // Dictionary
    DICT_TITLE: 'Terminology Dictionary',
    TAB_SYSTEM: 'System Dictionary',
    TAB_USER: 'My Dictionary',
    DICT_COUNT: '{count} terms',
    FILTER_PLACEHOLDER: 'Filter your terms...',
    EMPTY_DICT: 'No terms found.',
    EMPTY_USER_DICT: 'You haven\'t added any terms yet.',
    LBL_ADDED: 'Added: {date}',
    BTN_EXPORT_JSON: 'Export JSON',
    BTN_IMPORT_JSON: 'Import JSON',
    IMPORT_SUCCESS: 'Successfully imported {count} terms.',
    IMPORT_ERROR: 'Invalid file format or JSON parse error.',
    IMPORT_NO_DATA: 'No valid terms found in file.',
    BTN_PREV: 'Previous',
    BTN_NEXT: 'Next',
    PAGE_INFO: 'Page {current} of {total}',
    DETAIL_TITLE: 'Term Details',
    BTN_CLOSE: 'Close',

    // History
    HIST_TITLE: 'History',
    BTN_CLEAR_ALL: 'Clear All',
    EMPTY_HIST: 'No search history yet.',
    NO_MATCH_TEXT: 'No match',

    // Favorites
    SAVED_TITLE: 'Saved Terms',
    EMPTY_SAVED: 'No favorites saved yet.',

    // Settings
    SETTINGS_TITLE: 'Settings',
    SET_FUZZY: 'Fuzzy Search Sensitivity',
    SET_FUZZY_DESC: 'Adjust how exact matches need to be (Lower = Stricter)',
    SET_AUTOPLAY: 'Auto-Play Audio',
    SET_AUTOPLAY_DESC: 'Speak definitions automatically on selection',
    SET_AUTOCOPY: 'Auto-Copy Best Result',
    SET_AUTOCOPY_DESC: 'Auto-copy result on Enter or Translate click',
    SET_NOTE: 'Note: All data is stored locally in your browser\'s LocalStorage. Clearing your browser cache will remove your custom dictionary and settings.',

    // Toasts
    TOAST_COPY_SUCCESS: 'Copied to clipboard',
    TOAST_COPY_FAIL: 'Copy failed, please copy manually',
  }
};

export const useTranslation = () => {
  const language = useLanguageStore((state) => state.language);

  const t = (key: keyof typeof translations['en-US'], params?: Record<string, string | number>) => {
    let text = translations[language][key] || translations['en-US'][key] || key;
    
    if (params) {
      Object.entries(params).forEach(([k, v]) => {
        text = text.replace(`{${k}}`, String(v));
      });
    }
    
    return text;
  };

  return { t, language };
};
