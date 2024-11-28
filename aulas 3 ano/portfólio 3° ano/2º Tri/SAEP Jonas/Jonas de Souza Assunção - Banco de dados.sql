create table usuario(
	ID_usuario int not null primary key,
	nome varchar(75) not null,
	email varchar(50) not null
);

create table Tarefa(
	ID_tarefa int not null primary key,
	desc_tarefa varchar(60) not null,
	nome_setor varchar(15) not null,
	prioridade varchar(10) not null,
	data_cadastro varchar(11) not null,
	status varchar(10) not null default 'fazer',
	
	ID_usuario int not null,
	
	foreign key(ID_usuario) references "usuario"(ID_usuario)
)