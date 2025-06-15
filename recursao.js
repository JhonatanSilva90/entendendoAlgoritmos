// Versão 1: Iterativa com pilha
// Item para versão iterativa
function ItemPilha(nome, isCaixa = false, isChave = false, conteudo = []) {
  return {
    nome,
    emUmaCaixa: () => isCaixa,
    eUmaChave: () => isChave,
    conteudo,
  };
}

// Função iterativa com pilha
function procureChaveComPilha(caixaPilha) {
  const pilhaItens = [...caixaPilha];

  while (pilhaItens.length > 0) {
    const item = pilhaItens.pop();

    if (item.emUmaCaixa()) {
      pilhaItens.push(...item.conteudo);
    } else if (item.eUmaChave()) {
      console.log("📦 Achei a chave (com pilha)!");
    }
  }
}

// Teste da versão iterativa
const chavePilha = ItemPilha("chave", false, true);
const livroPilha = ItemPilha("livro");
const subCaixaPilha = ItemPilha("subcaixa", true, false, [chavePilha]);
const caixaPrincipalPilha = [livroPilha, subCaixaPilha];

console.log("\n🧭 Buscando com pilha:");
procureChaveComPilha(caixaPrincipalPilha);

// Versão 2: Recursiva
// Simula um item
function Item(nome, isCaixa = false, isChave = false, conteudo = []) {
  return {
    nome,
    emUmaCaixa: () => isCaixa,
    eUmaChave: () => isChave,
    conteudo,
  };
}

// Versão recursiva
// Item para versão recursiva
function ItemRec(nome, isCaixa = false, isChave = false, conteudo = []) {
  return {
    nome,
    emUmaCaixa: () => isCaixa,
    eUmaChave: () => isChave,
    conteudo,
  };
}

// Função recursiva
function procureChaveRecursiva(caixaRec) {
  for (const item of caixaRec) {
    if (item.emUmaCaixa()) {
      procureChaveRecursiva(item.conteudo);
    } else if (item.eUmaChave()) {
      console.log("🔁 Achei a chave (recursiva)!");
    }
  }
}

// Teste da versão recursiva
const chaveRec = ItemRec("chave", false, true);
const livroRec = ItemRec("livro");
const subCaixaRec = ItemRec("subcaixa", true, false, [chaveRec]);
const caixaPrincipalRec = [livroRec, subCaixaRec];

console.log("🧭 Buscando com recursão:");
procureChaveRecursiva(caixaPrincipalRec);
