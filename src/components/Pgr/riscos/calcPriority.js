const setPrioridade = (prob, serv) => {
  const result = prob * serv;
  let prioridade = '1.Intolerável';
  
  if (result < 4) {
    prioridade = '5.Trivial';
  } else if(result < 10) {
    prioridade = '4.Tolerável';
  } else if(result < 12) {
    prioridade = '3.Moderado';
  } else if(result < 15) {
    prioridade = '2.Substâncial';
  }

  return prioridade;
}

export default setPrioridade;
