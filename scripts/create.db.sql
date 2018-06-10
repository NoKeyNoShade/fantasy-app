CREATE TABLE league (
	id SERIAL NOT NULL PRIMARY KEY,
	label VARCHAR(255),
	active BOOLEAN NOT NULL DEFAULT 'f',
	week INT NOT NULL DEFAULT 1,
	season_id VARCHAR(255) NOT NULL,
	created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
	updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
	deleted_at TIMESTAMP WITH TIME ZONE
);