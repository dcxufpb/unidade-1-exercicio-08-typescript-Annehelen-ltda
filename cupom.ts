import { Loja } from './loja'; 

function isEmpty(str: string): boolean {
  let spaceCount = str.length - str.replace(" ", "").length;
  return str == null || spaceCount == str.length;
}

export function dados_loja_objeto(loja: Loja) {
  // Implemente aqui
  if (isEmpty(loja.nome_loja)) {
    throw new Error(`O campo nome da loja é obrigatório`);
  }
  if(isEmpty(loja.logradouro)){
    throw new Error(`O campo logradouro do endereço é obrigatório`);
  }
  let num = loja.numero + ""
  if(loja.numero == 0){
    num = "s/n";
  }
  if(isEmpty(loja.municipio)){
    throw new Error(`O campo município do endereço é obrigatório`);
  }
  if(isEmpty(loja.estado)){
    throw new Error(`O campo estado do endereço é obrigatório`);
  }
  if(isEmpty(loja.cnpj)){
    throw new Error(`O campo CNPJ da loja é obrigatório`);
  }
  if(isEmpty(loja.inscricao_estadual)){
    throw new Error(`O campo inscrição estadual da loja é obrigatório`);
  }

  var part2 = `${loja.logradouro}, ${num}`;
  if (! isEmpty (loja.complemento)){
      part2 += ` ${loja.complemento}`;
    }
  var part3 = "";
  if (! isEmpty (loja.bairro)){
      part3 += `${loja.bairro} - `;
  }
  part3 += `${loja.municipio} - ${loja.estado}`;
  
  var part4 = "";
  if (! isEmpty (loja.cep)){
      part4 = `CEP:${loja.cep}`;
    }
  if (! isEmpty(loja.telefone)){
      if (! isEmpty(part4)){
        part4 += ` `;
      }
      part4 += `Tel ${loja.telefone}`;
    }
  if (! isEmpty(part4)){
      part4 += `\n`;
    }
  var part5 = "";
  if (! isEmpty(loja.observacao)){
      part5 += `${loja.observacao}`;
    }
  let output = `${loja.nome_loja}\n`;
  output += `${part2}\n`;
  output += `${part3}\n`;
  output += `${part4}`;
  output += `${part5}\n`;
  output += `CNPJ: ${loja.cnpj}\n`;
  output += `IE: ${loja.inscricao_estadual}\n`;

  return output;
}
