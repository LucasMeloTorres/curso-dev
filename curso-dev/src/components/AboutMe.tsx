const AboutMe = () => {
  return (
    <div className="about-me">
      <h2>Sobre o curso</h2>
      <div className="about-me-content">
        <div className="about-me-image">
          <img
            className="about-image"
            src="./../src/assets/img/loja_iphone.jpg"
            alt="Loja de iPhones"
          />
        </div>
        <div className="about-me-text">
          <p>
            O curso de Manutenção de iPhones é uma iniciativa inovadora que visa
            capacitar profissionais para atuar no mercado de manutenção de
            dispositivos Apple.
            <p>
              <br />
              Além de promover o aprendizado técnico, valorizamos a ética, a
              responsabilidade e o compromisso com a qualidade. Nossa
              metodologia é focada na formação de profissionais não apenas
              competentes, mas também conscientes da importância de oferecer um
              serviço de excelência ao consumidor.
            </p>
            <br />
            <p>
              Convidamos você a conhecer mais sobre nossos cursos, as histórias
              de sucesso de nossos alunos e as oportunidades que surgem ao se
              especializar na manutenção de iPhones. Junte-se a nós e faça parte
              de uma comunidade dedicada ao avanço tecnológico e à
              profissionalização do setor.
            </p>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
