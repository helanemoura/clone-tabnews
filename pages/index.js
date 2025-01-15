function Home() {
  const examples = [
    {
      title: "Crie Seu Próprio Jogo",
      description: "Imagine construir mundos incríveis e permitir que outras pessoas joguem!",
      image: "https://cdn-icons-png.flaticon.com/128/7304/7304451.png",
    },
    {
      title: "Explore Mapas Interativos",
      description: "Mostre rotas, marque lugares no mapa e crie ferramentas incríveis para ajudar as pessoas.",
      image: "https://images.vexels.com/media/users/3/210154/isolated/preview/5a6e7dbae9a2d1a2d15d5d1a7a314c3c-silhueta-do-mapa-da-america.png",
    },
    {
      title: "Entenda as Eleições",
      description: "Construa gráficos e painéis que mostrem os resultados em tempo real!",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStgrL3bojF8nxKrb4NQKUmkCBqHu_MindamQ&s",
    },
    {
      title: "Ajude a Resolver Problemas do Mundo",
      description: "Com tecnologia, você pode criar soluções que realmente fazem diferença.",
      image: "https://cdn-icons-png.flaticon.com/512/3339/3339252.png",
    },
  ];

  // Função para gerar e baixar um arquivo .txt
  const handleDownloadTxt = () => {
    const confirmation = window.confirm(
      "O download do arquivo com dicas para começar na programação será iniciado. Deseja continuar?"
    );
    
    if (confirmation) {
    const text = `Bem-vindo à programação, Yan! 🚀\n\nVocê está prestes a começar uma jornada incrível, onde poderá criar jogos, explorar mapas interativos, entender resultados de eleições e muito mais. Aqui estão algumas dicas para dar seus primeiros passos:\n\n1. **Crie uma conta no GitHub**\n   - O GitHub é como uma "rede social" para programadores. Lá, você pode salvar seus projetos, colaborar com outras pessoas e até contribuir com projetos famosos.\n   - Acesse: https://github.com e crie sua conta gratuita.\n\n2. **Aprenda o básico de programação**\n   - Comece com uma linguagem simples e popular, como **JavaScript**. É a base de muitos sites e jogos na web.\n   - Assista aulas gratuitas no YouTube ou plataformas como:\n     https://www.youtube.com/filipedeschamps\n\n3. **Pratique todos os dias**\n   - Reserve pelo menos 30 minutos por dia para programar. A prática é o segredo para melhorar!\n   - Use ferramentas de inteligência artificial para ajudar a entender, solicitando explicações detalhadas\n\n4. **Crie pequenos projetos**\n   - Não precisa começar com algo grande. Aqui estão algumas ideias fáceis:\n     - Um site simples sobre algo que você gosta (pode ser ideias, imagens) .\n     - Um jogo básico como Pedra, Papel e Tesoura.\n     - Um mapa interativo que mostra os países que você quer visitar.\n\n5. **Explore cursos sobre as coisas que você gosta**\n   - Gosta de jogos? Aprenda a usar o Unity ou Godot.\n   - Ama mapas? Experimente APIs de mapas como Google Maps ou Leaflet.\n   - Quer entender gráficos e dados? Estude Python e bibliotecas como Matplotlib ou Plotly.\n\n6. **Participe da comunidade**\n   - Entre em fóruns e grupos para aprender com outras pessoas. Aqui estão algumas sugestões:\n     - Stack Overflow: https://stackoverflow.com/\n     - Discords sobre programação.\n     - Reddit (subreddits como r/learnprogramming e r/javascript).\n\n7. **Compartilhe seu progresso**\n   - Coloque seus projetos no GitHub e compartilhe com amigos. Isso motiva você a continuar.\n\n8. **Nunca desista!**\n   - No começo, pode parecer difícil, mas lembre-se: TODOS os programadores já foram iniciantes. O segredo é dar um passo de cada vez.\n\n---\n\n"Programar é como construir algo mágico: basta começar para descobrir o quanto você é capaz!"\n\nBoa sorte na sua jornada! Estou do seu lado para o que precisar!  💻✨ `;
    const blob = new Blob([text], { type: "text/plain" });
    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = url;
    link.download = "DicasParaComecar.txt";
    link.click();

    URL.revokeObjectURL(url);
  } else {
    alert("Tudo bem, você pode começar quando estiver pronto!");
  }
};

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Yan, descubra o que você pode criar!</h1>
      <p style={styles.subtitle}>
        Com programação, você pode transformar suas paixões em realidade:
      </p>
      <div style={styles.grid}>
        {examples.map((example, index) => (
          <div key={index} style={styles.card}>
            <img src={example.image} alt={example.title} style={styles.image} />
            <h2 style={styles.cardTitle}>{example.title}</h2>
            <p style={styles.cardDescription}>{example.description}</p>
          </div>
        ))}
      </div>
      <button style={styles.button} onClick={handleDownloadTxt}>
        Quero começar!
      </button>
    </div>
  );
}

const styles = {
  container: {
    padding: "20px",
    fontFamily: "Arial, sans-serif",
    textAlign: "center",
    background: "linear-gradient(135deg, #FFEDD5, #D4F1F4, #C3E0E5)",
    minHeight: "100vh",
    color: "#333",
  },
  title: {
    fontSize: "2.5em",
    color: "#1A535C",
    marginBottom: "10px",
  },
  subtitle: {
    fontSize: "1.5em",
    marginBottom: "30px",
    color: "#4ECDC4",
  },
  grid: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "20px",
  },
  card: {
    background: "#FFFFFF",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    maxWidth: "250px",
    textAlign: "center",
  },
  image: {
    width: "100%",
    borderRadius: "8px",
  },
  cardTitle: {
    fontSize: "1.2em",
    color: "#1A535C",
    margin: "10px 0",
  },
  cardDescription: {
    fontSize: "1em",
    color: "#555",
  },
  button: {
    marginTop: "30px",
    backgroundColor: "#8ECAE6",
    color: "white",
    padding: "15px 30px",
    fontSize: "1.2em",
    fontWeight: "bold",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    boxShadow: "0 3px 5px rgba(0, 0, 0, 0.2)",
    transition: "all 0.3s ease",
  },
  buttonHover: {
    backgroundColor: "#219EBC",
    transform: "translateY(-3px)",
  },
};

export default Home;