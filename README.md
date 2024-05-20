# 🏆 Desafio de Partidas Rankeadas

Este projeto em JavaScript calcula a relação de vitórias e derrotas de um herói em partidas rankeadas e determina seu nível de acordo com essa relação.

## 📄 Visão Geral

O projeto consiste em um script que:
1. ✨ Calcula o saldo de vitórias e derrotas de um herói.
2. 🔝 Determina o nível do herói com base nesse saldo.
3. 📊 Exibe o saldo e o nível do herói.

## 🔍 Estrutura do Código

### 📂 Funções Principais

- `relacaoVitoriasDerrotas(numVitorias, numDerrotas)`: Calcula o saldo de vitórias e derrotas.
  - **Parâmetros:**
    - `numVitorias`: Número de vitórias.
    - `numDerrotas`: Número de derrotas.
  - **Retorno:** Saldo de vitórias.

- `exibeElo()`: Exibe o saldo de vitórias e derrotas e o nível do herói no console.

### 📈 Lógica de Determinação do Nível

A lógica para determinar o nível do herói é a seguinte:
-  Saldo de vitórias menor que 10: **Ferro**
-  Saldo de vitórias entre 10 e 20: **Bronze**
-  Saldo de vitórias entre 21 e 50: **Prata**
-  Saldo de vitórias entre 51 e 80: **Ouro**
-  Saldo de vitórias entre 81 e 90: **Diamante**
-  Saldo de vitórias entre 91 e 100: **Lendário**
-  Saldo de vitórias maior que 100: **Imortal**

## 🛠 Uso

Para usar o script, siga as etapas abaixo:

1. Defina os valores de vitórias e derrotas:
    ```javascript
    let relacaoElo = relacaoVitoriasDerrotas(45, 14);
    ```
2. Execute a função `exibeElo()` para exibir o saldo e o nível:
    ```javascript
    exibeElo();
    ```

### 🎯 Exemplo de Saída

```javascript
## Desafio de partidas rankeadas ##
O herói tem saldo de 31 e está no nível de Prata
```
### Problemas Conhecidos
As condições nas instruções if...else precisam ser ajustadas para evitar sobreposição e lógica incorreta. Por exemplo:
```javascript
if (relacaoElo < 10) {
    nivel = "Ferro";
} else if (relacaoElo >= 10 && relacaoElo <= 20) {
    nivel = "Bronze";
} else if (relacaoElo >= 21 e relacaoElo <= 50) {
    nivel = "Prata";
} else if (relacaoElo >= 51 e relacaoElo <= 80) {
    nivel = "Ouro";
} else if (relacaoElo >= 81 e relacaoElo <= 90) {
    nivel = "Diamante";
} else if (relacaoElo >= 91 e relacaoElo <= 100) {
    nivel = "Lendário";
} else if (relacaoElo > 100) {
    nivel = "Imortal";
}
```
### 🤝 Contribuições
Contribuições são bem-vindas! Sinta-se à vontade para fazer um fork do projeto e enviar pull requests.
