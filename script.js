var carta1 = {
  nome: "Minato",
  imagem:
    "https://criticalhits.com.br/wp-content/uploads/2021/11/minato-namikaze-naruto-shippuden-quiz.jpg",
  atributos: {
    Ninjutsu: 9,
    Taijutsu: 8,
    Genjutsu: 7
  }
};

var carta2 = {
  nome: "Might Guy",
  imagem: "http://4.bp.blogspot.com/-HhA2QBMRpcQ/T9_OejrFODI/AAAAAAAABso/NcmWe1GD9uA/s1600/Gai.jpg",
  atributos: {
    Ninjutsu: 3,
    Taijutsu: 10,
    Genjutsu: 2
  }
};

var carta3 = {
  nome: "Kakashi",
  imagem:
    "https://criticalhits.com.br/wp-content/uploads/2019/12/kakashi-happy.jpg",
  atributos: {
    Ninjutsu: 9,
    Taijutsu: 9,
    Genjutsu: 8
  }
};

var carta4 = {
  nome: "Tenten",
  imagem:
    "http://4.bp.blogspot.com/-h-caDM_uvLs/Th8MRuTRN2I/AAAAAAAAAEU/7WD15OMbMxc/s1600/Tenten.jpg",
  atributos: {
    Ninjutsu: 4,
    Taijutsu: 4,
    Genjutsu: 3
  }
};

var carta5 = {
  nome: "Sai",
  imagem:
    "http://pm1.narvii.com/6408/00b0df27bcb73427d32bebfb401dfb1c01c76640_00.jpg",
  atributos: {
    Ninjutsu: 7,
    Taijutsu: 7,
    Genjutsu: 3
  }
};

var carta6 = {
  nome: "Chouji",
  imagem:
    "http://1.bp.blogspot.com/-RkGnBqwXGf0/Tai8j1BDNjI/AAAAAAAAASI/9dItYQacYLg/s400/Chouji.png",
  atributos: {
    Ninjutsu: 7,
    Taijutsu: 8,
    Genjutsu: 3
  }
};

var carta7 = {
  nome: "Itachi",
  imagem:
    "https://i.pinimg.com/originals/91/2f/96/912f96d0cdefb42d2461ea5d40ad641e.jpg",
  atributos: {
    Ninjutsu: 9,
    Taijutsu: 8,
    Genjutsu: 10
  }
};

var carta8 = {
  nome: "Pain",
  imagem:
    "https://nerdhits.com.br/wp-content/uploads/2021/11/Pain-looking-serious.jpg",
  atributos: {
    Ninjutsu: 10,
    Taijutsu: 8,
    Genjutsu: 8
  }
};

var carta9 = {
  nome: "Jiraya",
  imagem:
    "https://kanto.legiaodosherois.com.br/w750-h450-k1/wp-content/uploads/2021/02/legiao_jnhcQRAHmVtP.jpg.jpeg",
  atributos: {
    Ninjutsu: 9,
    Taijutsu: 9,
    Genjutsu: 8
  }
};

var cartaMaquina;
var cartaJogador;
var cartas = [carta1, carta2, carta3, carta4, carta5, carta6, carta7, carta8, carta9];

function sortearCarta() {
  var numeroCartaMaquina = parseInt(Math.random() * 9);
  cartaMaquina = cartas[numeroCartaMaquina];

  var numeroCartaJogador = parseInt(Math.random() * 9);
  while (numeroCartaJogador == numeroCartaMaquina) {
    numeroCartaJogador = parseInt(Math.random() * 9);
  }
  cartaJogador = cartas[numeroCartaJogador];
  console.log(cartaJogador);

  document.getElementById("btnSortear").disabled = true;
  document.getElementById("btnJogar").disabled = false;
  exibirCartaJogador();
}

function obtemAtributoSelecionado() {
  var radioAtributo = document.getElementsByName("atributo");
  for (var i = 0; i < radioAtributo.length; i++) {
    if (radioAtributo[i].checked) {
      return radioAtributo[i].value;
    }
  }
}

function jogar() {
  console.log("chamou");
  var atributoSelecionado = obtemAtributoSelecionado();
  var divResultado = document.getElementById("resultado");

  if (
    cartaJogador.atributos[atributoSelecionado] >
    cartaMaquina.atributos[atributoSelecionado]
  ) {
    htmlResultado = "<p class='resultado-final'>Venceu</p>";
  } else if (
    cartaJogador.atributos[atributoSelecionado] <
    cartaMaquina.atributos[atributoSelecionado]
  ) {
    htmlResultado = "<p class='resultado-final'>Perdeu</p>";
  } else {
    htmlResultado = "<p class='resultado-final'>Empatou</p>";
  }
  divResultado.innerHTML = htmlResultado;

  document.getElementById("btnJogar").disabled = true;
  exibirCartaMaquina();
}

function exibirCartaJogador() {
  var divCartaJogador = document.getElementById("carta-jogador");
  divCartaJogador.style.backgroundImage = `url(${cartaJogador.imagem})`;
  // divCartaJogador.style.backgroundImage = "url(" + cartaJogador.imagem + ")"
  var moldura =
    '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
  var tagHTML = "<div id='opcoes' class='carta-status'>";

  var opcoesTexto = "";
  for (var atributo in cartaJogador.atributos) {
    opcoesTexto +=
      "<input type='radio' name='atributo' value='" +
      atributo +
      "'>" +
      atributo +
      " " +
      cartaJogador.atributos[atributo] +
      "<br>";
  }
  var nome = `<p class="carta-subtitle">${cartaJogador.nome}</p>`;

  divCartaJogador.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>";
}

function exibirCartaMaquina() {
  var divCartaMaquina = document.getElementById("carta-maquina");
  divCartaMaquina.style.backgroundImage = `url(${cartaMaquina.imagem})`;
  // divCartaJogador.style.backgroundImage = "url(" + cartaJogador.imagem + ")"
  var moldura =
    '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
  var tagHTML = "<div id='opcoes' class='carta-status'>";

  var opcoesTexto = "";
  for (var atributo in cartaMaquina.atributos) {
    opcoesTexto +=
      "<p type='text' name='atributo' value='" +
      atributo +
      "'>" +
      atributo +
      " " +
      cartaMaquina.atributos[atributo] +
      "</p>";
  }
  var nome = `<p class="carta-subtitle">${cartaMaquina.nome}</p>`;

  divCartaMaquina.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>";
}