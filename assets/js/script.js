
const listar = document.querySelectorAll('.listar');
const btnOcultar = document.querySelectorAll('.btn-ocultar');

//===================================================================

//----------------< Aluno >

let isActiveAluno = true;

const btnlistarAluno = document.querySelector('.listar-alunos');

btnlistarAluno.addEventListener('click', () => {
    if (isActiveAluno) {
      window.scrollTo({
        top: 1500,
        left:0
      })
      isActiveAluno = false;
      listar[0].style.display = 'block';
    } else {
      isActiveAluno = true;
      listar[0].style.display = 'none';
    }
});

btnOcultar[0].addEventListener('click', () => {
  isActiveCurso = true;
  listar[0].style.display = 'none';
});

//===================================================================

//----------------< Disciplinas >

let isActiveDisciplinas = true;

const btnlistarDisciplinas = document.querySelector('.listar-disciplinas');

btnlistarDisciplinas.addEventListener('click', () => {
    if (isActiveDisciplinas) {
      window.scrollTo({
        top: 1500,
        left:0
      })
      isActiveDisciplinas = false;
      listar[1].style.display = 'block';
    } else {
      isActiveDisciplinas = true;
      listar[1].style.display = 'none';
    }
});

btnOcultar[1].addEventListener('click', () => {
  isActiveCurso = true;
  listar[1].style.display = 'none';
});

//===================================================================

//----------------< Curso >

let isActiveCurso = true;

const btnlistarCurso = document.querySelector('.listar-cursos');

btnlistarCurso.addEventListener('click', () => {
    if (isActiveCurso) {
      window.scrollTo({
        top: 1500,
        left:0
      })
      isActiveCurso = false;
      listar[2].style.display = 'block';
    } else {
      isActiveCurso = true;
      listar[2].style.display = 'none';
    }
});

btnOcultar[2].addEventListener('click', () => {
    isActiveCurso = true;
    listar[2].style.display = 'none';
});

//===================================================================

//----------------< Button Cadastrar >

const buttonCadastrar = document.querySelector('#btn-cadastrar');

buttonCadastrar.addEventListener('click', () => {
  window.scrollTo({
    top: 900,
    left:0
  })
});

//===================================================================

//----------------< Botão Home Screen do Rodapé >

const btn_footer_Home_screen = document.querySelector('#btn_footer_Home_screen');

btn_footer_Home_screen.addEventListener('click', () => {
    window.scrollTo(0,0);
});

//===================================================================

//----------------< Botão About do Rodapé >

const btn_footer_about = document.querySelector('#btn_footer_about');

btn_footer_about.addEventListener('click', () => {
  window.scrollTo({
    top: 1500,
    left:0
  })
});

//===================================================================

//----------------< Botão Matriculas Abertas >

const btnMatriculasAbertas = document.querySelector('#btn-matriculas-abertas');

btnMatriculasAbertas.addEventListener('click', () => {
  window.scrollTo({
    top: 900,
    left:0
  })
});

//===================================================================

//----------------< Dropdown Options >

const buttonOptions = document.querySelector('.btn-options');
const dropdownOptions = document.querySelector('.dropdown-options');
const buttonAlunos = document.querySelector('#dropdown-options-aluno');
const buttonDisciplinas = document.querySelector('#dropdown-options-disciplinas');
const buttonCursos = document.querySelector('#dropdown-options-cursos');
const fieldsCadastro = document.querySelectorAll('.cadastro form');
let isActiveDropdownOptions = true;
let isActiveFieldCadastro = true;

buttonOptions.addEventListener('click', () => {
  if(isActiveDropdownOptions) {
    isActiveDropdownOptions = false;
    dropdownOptions.style.display = 'block';
  } else {
    isActiveDropdownOptions = true;
    dropdownOptions.style.display = 'none';
  }
});

buttonAlunos.addEventListener('click', () => {
  isActiveFieldCadastro = false;
  fieldsCadastro[0].style.display = 'flex';
  fieldsCadastro[1].style.display = 'none';
  fieldsCadastro[2].style.display = 'none';
});

buttonDisciplinas.addEventListener('click', () => {
  isActiveFieldCadastro = false;
  fieldsCadastro[1].style.display = 'flex';
  fieldsCadastro[0].style.display = 'none';
  fieldsCadastro[2].style.display = 'none';
});

buttonCursos.addEventListener('click', () => {
  isActiveFieldCadastro = false;
  fieldsCadastro[2].style.display = 'flex';
  fieldsCadastro[0].style.display = 'none';
  fieldsCadastro[1].style.display = 'none';
});
