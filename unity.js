module.exports = {
  unidade: 'pm',
  nome: 'picômetro',
  valor: Math.pow(10, -6), // relativo ao metro
  validate: (value) => !isNaN(value)
}