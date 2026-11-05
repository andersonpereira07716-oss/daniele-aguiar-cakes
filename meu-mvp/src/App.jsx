import React, { useState } from 'react';

export default function App() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [receita, setReceita] = useState(12450);
  const [utilizadores, setUtilizadores] = useState(342);
  const [atividades, setAtividades] = useState([
    { nome: 'João Silva', plano: 'Plano Pro', valor: 'R$ 99/mês', status: 'Ativo' },
    { nome: 'Maria Santos', plano: 'Plano Basic', valor: 'R$ 49/mês', status: 'Pendente' },
    { nome: 'Tech Solutions', plano: 'Enterprise', valor: 'R$ 499/mês', status: 'Ativo' }
  ]);

  const handleNovoRegisto = () => {
    const nomeNovo = prompt("Nome do novo cliente/registo:");
    if (!nomeNovo) return;
    
    const novoItem = {
      nome: nomeNovo,
      plano: 'Plano Pro',
      valor: 'R$ 99/mês',
      status: 'Ativo'
    };

    setAtividades([novoItem, ...atividades]);
    setUtilizadores(utilizadores + 1);
    setReceita(receita + 99);
    alert("Novo registo adicionado com sucesso!");
  };

  return (
    <div className="min-h-screen bg-[#0b0f19] text-white p-4 font-sans">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-2">
          <div className="bg-emerald-500 text-black font-bold px-3 py-1 rounded-lg">S</div>
          <span className="font-bold text-lg">StartupMVP</span>
        </div>
        <div className="flex space-x-2">
          <button className="bg-gray-800 p-2 rounded-full text-gray-300">🔔</button>
          <div className="bg-emerald-600 text-xs font-bold px-2 py-1 rounded-full flex items-center">AD</div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="flex space-x-4 border-b border-gray-800 pb-3 mb-4 overflow-x-auto">
        {['dashboard', 'clientes', 'vendas', 'configurações'].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`capitalize px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
              activeTab === tab ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30' : 'text-gray-400 hover:text-white'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Main Content */}
      <div className="mb-6">
        <h1 className="text-xl font-bold capitalize">{activeTab}</h1>
        <p className="text-sm text-gray-400">Visão geral e gestão em tempo real do seu produto.</p>
      </div>

      {/* Action Button */}
      <button 
        onClick={handleNovoRegisto}
        className="w-full bg-emerald-500 hover:bg-emerald-400 text-black font-bold py-3 px-4 rounded-xl shadow-lg transition-all flex items-center justify-center space-x-2 mb-6"
      >
        <span>+ Novo Registo</span>
      </button>

      {/* Metrics Cards */}
      <div className="space-y-4 mb-6">
        <div className="bg-gray-900/60 border border-gray-800 p-4 rounded-2xl">
          <div className="flex justify-between text-sm text-gray-400 mb-1">
            <span>Receita Mensal</span>
            <span className="text-emerald-400 font-semibold">+14% ↗</span>
          </div>
          <div className="text-2xl font-bold">R$ {receita.toLocaleString()}</div>
        </div>

        <div className="bg-gray-900/60 border border-gray-800 p-4 rounded-2xl">
          <div className="flex justify-between text-sm text-gray-400 mb-1">
            <span>Novos Utilizadores</span>
            <span className="text-emerald-400 font-semibold">+8% ↗</span>
          </div>
          <div className="text-2xl font-bold">{utilizadores}</div>
        </div>

        <div className="bg-gray-900/60 border border-gray-800 p-4 rounded-2xl">
          <div className="flex justify-between text-sm text-gray-400 mb-1">
            <span>Taxa de Conversão</span>
            <span className="text-emerald-400 font-semibold">+1.1% ↗</span>
          </div>
          <div className="text-2xl font-bold">4.2%</div>
        </div>
      </div>

      {/* Recent Activities */}
      <div className="bg-gray-900/40 border border-gray-800 p-4 rounded-2xl">
        <h2 className="text-base font-bold mb-3">Atividades Recentes</h2>
        <div className="space-y-3">
          {atividades.map((item, index) => (
            <div key={index} className="flex justify-between items-center border-b border-gray-800/60 pb-3">
              <div>
                <div className="font-semibold text-sm">{item.nome}</div>
                <div className="text-xs text-gray-400">{item.plano}</div>
              </div>
              <div className="text-right">
                <div className="text-sm font-medium">{item.valor}</div>
                <span className={`text-[10px] px-2 py-0.5 rounded-full ${item.status === 'Ativo' ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' : 'bg-amber-500/10 text-amber-400 border border-amber-500/20'}`}>
                  {item.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
