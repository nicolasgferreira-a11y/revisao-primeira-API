SHOW DATABASES;

CREATE DATABASE turmads1b

;

CREATE TABLE alunos(
	id INT AUTO_INCREMENT PRIMARY KEY,
	nome varchar(100) NOT NULL,
	curso VARCHAR(100) NOT NULL 
	);
	
	SHOW TABLES; 

    SELECT * FROM alunos;

INSERT INTO alunos (nome, curso)
	VALUES ('Breno', 'Desenvolvimento de sistemas'),
	 ('Pedro', 'Redes de computador'),
	 ('Larissa', 'Banco de dados'),
	 ('Carlos', 'Administração');