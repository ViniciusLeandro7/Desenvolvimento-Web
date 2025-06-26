// const usuario = [
//     {Nome: "Vinicius", idade: "21", ativo: true, tipo: "admin"},
//     {Nome: "Talita", idade: "28", ativo: false, tipo: "commum"},
//     {Nome: "Mariana", idade: "25", ativo: true, tipo: "commum"},
//     {Nome: "Bruno", idade: "20", ativo: false, tipo: "admin"},
// ];

// function filtrarUsuariosValidos(lista) {
//     return lista.filter(usuario =>
//         usuario.ativo === true &&
//         usuario.idade > 25 &&
//         usuario.tipo !== "admin"
//     );
// }

// const usuariosFiltrados = filtrarUsuariosValidos(usuario);

// alert("Usuarios Validos:");
// alert(usuariosFiltrados);


 
const cursos = [
    { titulo: "Como lavar louça", categoria: "Limpeza", cargaHoraria: 40, disponivel: true },
    { titulo: "Como limpar a casa em 2 horas", categoria: "Organização", cargaHoraria: 30, disponivel: false },
    { titulo: "Como não adoecer", categoria: "Saúde", cargaHoraria: 50, disponivel: true }
  ];
  
 
  function buscarCurso(cursos, tituloProcurado) {
    const cursoEncontrado = cursos.find(curso => curso.titulo.toLowerCase() === tituloProcurado.toLowerCase());
  
    if (!cursoEncontrado) {
      return "Curso não encontrado.";
    }
  
    if (cursoEncontrado.disponivel) {
      return `Curso "${cursoEncontrado.titulo}" está disponível! Carga horária: ${cursoEncontrado.cargaHoraria}h.`;
    } else {
      return `O curso "${cursoEncontrado.titulo}" foi encontrado, mas não está disponível no momento.`;
    }
  }
  
  
  const tituloDoCurso = prompt("Digite o título do curso que deseja buscar:");
  const resultado = buscarCurso(cursos, tituloDoCurso);
  alert(resultado);
  


