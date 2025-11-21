
import React, { useState } from 'react';
import { Layout } from './components/Layout';
import { Translator } from './components/Translator';
import { BatchTranslation } from './components/BatchTranslation';
import { UserDictionary } from './components/UserDictionary';
import { PageRoute, Term } from './types';
import { useStore } from './store';
import { Trash2, Volume2 } from 'lucide-react';
import { fetchSystemTerms } from './services/search';
import { speakText } from './services/tts';
import { useTranslation } from './services/i18n';

// Simple components for History/Favorites/Settings inside App to save file count
// In a larger app, these would be separate files.

const HistoryPage = () => {
  const { history, clearHistory, addToHistory } = useStore();
  const { t } = useTranslation();

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-slate-800">{t('HIST_TITLE')}</h2>
        {history.length > 0 && (
          <button onClick={clearHistory} className="text-xs font-bold text-red-500 bg-red-50 px-3 py-1 rounded-lg hover:bg-red-100 transition-colors">
            {t('BTN_CLEAR_ALL')}
          </button>
        )}
      </div>
      <div className="space-y-2">
        {history.length === 0 ? <p className="text-slate-400">{t('EMPTY_HIST')}</p> : history.map(h => (
          <div key={h.id} className="flex justify-between items-center p-3 bg-white/40 rounded-lg border border-white/40">
            <div>
              <p className="font-medium text-slate-700">{h.query}</p>
              <p className="text-xs text-indigo-500">{h.resultTerm || t('NO_MATCH_TEXT')}</p>
            </div>
            <span className="text-[10px] text-slate-400">{new Date(h.timestamp).toLocaleTimeString()}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

const FavoritesPage = () => {
  const { favorites, userTerms, toggleFavorite } = useStore();
  const [systemTerms, setSys] = useState<Term[]>([]);
  const { t } = useTranslation();

  React.useEffect(() => { fetchSystemTerms().then(setSys); }, []);

  const allTerms = [...userTerms, ...systemTerms];
  const favTerms = allTerms.filter(t => favorites.includes(t.id));

  return (
    <div>
      <h2 className="text-2xl font-bold text-slate-800 mb-6">{t('SAVED_TITLE')}</h2>
      <div className="grid gap-4 md:grid-cols-2">
        {favTerms.length === 0 ? <p className="text-slate-400 col-span-2 text-center py-10">{t('EMPTY_SAVED')}</p> : favTerms.map(term => (
          <div key={term.id} className="p-4 bg-white/70 rounded-xl border border-indigo-100 shadow-sm relative group">
             <div className="flex justify-between">
               <div>
                 <h4 className="font-bold text-lg text-slate-800">{term.chinese_term}</h4>
                 <p className="text-indigo-600 font-medium">{term.english_term}</p>
               </div>
               <div className="flex gap-1">
                 <button onClick={() => speakText(term.english_term)} className="p-1.5 text-slate-400 hover:text-indigo-600"><Volume2 className="w-4 h-4" /></button>
                 <button onClick={() => toggleFavorite(term.id)} className="p-1.5 text-amber-400 hover:text-slate-300"><Trash2 className="w-4 h-4" /></button>
               </div>
             </div>
             {term.pinyin_full && <p className="text-xs text-slate-400 mt-2 font-mono">{term.pinyin_full}</p>}
          </div>
        ))}
      </div>
    </div>
  );
};

const SettingsPage = () => {
  const { settings, updateSettings } = useStore();
  const { t } = useTranslation();
  
  return (
    <div className="max-w-md">
      <h2 className="text-2xl font-bold text-slate-800 mb-6">{t('SETTINGS_TITLE')}</h2>
      
      <div className="space-y-6">
        <div className="flex items-center justify-between p-4 bg-white/50 rounded-xl border border-white/50">
          <div>
            <h4 className="font-medium text-slate-800">{t('SET_FUZZY')}</h4>
            <p className="text-xs text-slate-500">{t('SET_FUZZY_DESC')}</p>
          </div>
          <div className="w-32">
             <input 
               type="range" 
               min="0.0" max="0.6" step="0.1"
               value={settings.searchFuzzyThreshold}
               onChange={(e) => updateSettings({ searchFuzzyThreshold: parseFloat(e.target.value) })}
               className="w-full accent-indigo-600"
             />
             <div className="text-center text-xs font-mono mt-1">{settings.searchFuzzyThreshold}</div>
          </div>
        </div>

        <div className="flex items-center justify-between p-4 bg-white/50 rounded-xl border border-white/50">
          <div>
            <h4 className="font-medium text-slate-800">{t('SET_AUTOPLAY')}</h4>
            <p className="text-xs text-slate-500">{t('SET_AUTOPLAY_DESC')}</p>
          </div>
          <input 
            type="checkbox"
            checked={settings.autoPlayAudio}
            onChange={(e) => updateSettings({ autoPlayAudio: e.target.checked })}
            className="w-5 h-5 accent-indigo-600 rounded"
          />
        </div>

        <div className="flex items-center justify-between p-4 bg-white/50 rounded-xl border border-white/50">
          <div>
            <h4 className="font-medium text-slate-800">{t('SET_AUTOCOPY')}</h4>
            <p className="text-xs text-slate-500">{t('SET_AUTOCOPY_DESC')}</p>
          </div>
          <input 
            type="checkbox"
            checked={settings.autoCopy}
            onChange={(e) => updateSettings({ autoCopy: e.target.checked })}
            className="w-5 h-5 accent-indigo-600 rounded"
          />
        </div>
        
        <div className="p-4 bg-indigo-50 rounded-xl text-xs text-indigo-800 leading-relaxed">
          <strong>{t('SET_NOTE')}</strong>
        </div>
      </div>
    </div>
  );
};

const App: React.FC = () => {
  const [activePage, setActivePage] = useState<PageRoute>('translate');

  const renderPage = () => {
    switch (activePage) {
      case 'translate': return <Translator />;
      case 'batch': return <BatchTranslation />;
      case 'dictionary': return <UserDictionary />;
      case 'history': return <HistoryPage />;
      case 'favorites': return <FavoritesPage />;
      case 'settings': return <SettingsPage />;
      default: return <Translator />;
    }
  };

  return (
    <Layout activePage={activePage} onNavigate={setActivePage}>
      {renderPage()}
    </Layout>
  );
};

export default App;
