import { useState } from 'react';
import './App.css';

function App() {
  // 1. Estado para armazenar o texto da busca (Tempo Real)
  const [textoBusca, setTextoBusca] = useState('');

  // 2. Base de dados estática com no mínimo 10 fotos
  const fotos = [
    { id: 1, titulo: "Cachorro Filhote", url: "https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=300" },
    { id: 2, titulo: "Gato Curioso", url: "https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&w=300" },
    { id: 3, titulo: "Leão", url: "https://images.pexels.com/photos/247502/pexels-photo-247502.jpeg?auto=compress&cs=tinysrgb&w=300" },
    { id: 4, titulo: "Periquito", url: "https://images.pexels.com/photos/1661179/pexels-photo-1661179.jpeg?auto=compress&cs=tinysrgb&w=300" },
    { id: 5, titulo: "Raposa Vermelha", url: "https://upload.wikimedia.org/wikipedia/commons/3/30/Vulpes_vulpes_ssp_fulvus.jpg" },
    { id: 6, titulo: "Elefante Africano", url: "https://images.pexels.com/photos/1054655/pexels-photo-1054655.jpeg?auto=compress&cs=tinysrgb&w=300" },
    { id: 7, titulo: "Tigre de Bengala", url: "https://s2.glbimg.com/POmi5Pnh4bZkaqzlcLsl1XjfyY8=/e.glbimg.com/og/ed/f/original/2019/05/07/bengal-tiger-1149535_960_720.jpg" },
    { id: 8, titulo: "Lobo Cinzento", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Canis_lupus_265b.jpg/330px-Canis_lupus_265b.jpg" },
    { id: 9, titulo: "Águia Americana", url: "https://upload.wikimedia.org/wikipedia/commons/d/db/Bald_eagle_about_to_fly_in_Alaska_%282016%29.jpg" },
    { id: 10, titulo: "Urso Marrom", url: "https://images.pexels.com/photos/35435/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=300" },
  ];

  // 3. Lógica de Filtragem (Case Insensitive)
  // Como é "tempo real", calculamos isso a cada renderização baseada no 'textoBusca'
  const fotosFiltradas = fotos.filter((foto) =>
    foto.titulo.toLowerCase().includes(textoBusca.toLowerCase())
  );

  return (
    <div className="app-container">
      
      {/* --- CABEÇALHO --- */}
      <header className="header">
        <h1>Galeria de Fotos</h1>

      </header>

      {/* --- CONTEÚDO PRINCIPAL --- */}
      <main className="main-content">
        
        {/* Barra de Pesquisa */}
        <div className="search-container">
          <input
            type="text"
            placeholder="Pesquise pelo nome da foto..."
            value={textoBusca}
            onChange={(e) => setTextoBusca(e.target.value)}
            className="search-input"
          />
          <button className="search-button">
            🔍
          </button>
        </div>

        {/* Grid de Fotos */}
        <div className="photo-grid">
          {fotosFiltradas.length > 0 ? (
            fotosFiltradas.map((foto) => (
              <div key={foto.id} className="photo-card">
                <img src={foto.url} alt={foto.titulo} />
                <div className="photo-info">
                  <h3>{foto.titulo}</h3>
                </div>
              </div>
            ))
          ) : (
            /* Mensagem se não encontrar nada */
            <div className="no-results">
              <p>Nenhuma foto encontrada</p>
            </div>
          )}
        </div>

      </main>

      {/* --- RODAPÉ --- */}
      <footer className="footer">
        <p>© 2026 Galeria de Fotos. Todos os direitos reservados.</p>
      </footer>

    </div>
  );
}

export default App;