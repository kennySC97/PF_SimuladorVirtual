
CREATE TABLE Simulacion (
	[Id] INT IDENTITY NOT NULL,
	[Nombre] VARCHAR(20) NOT NULL,
	[CantidadMaquinas] INT NOT NULL,
	[DuracionTotal] DECIMAL NOT NULL,
	CONSTRAINT pk_simulacion
		PRIMARY KEY ([Id])
)

CREATE TABLE Maquina (
	[Id] INT IDENTITY NOT NULL,
	[IdSimulacion] INT NOT NULL,
	[NombreMaquina] VARCHAR(20) NOT NULL,
	[CostoOperacion] DECIMAL NOT NULL,
	[ProbabilidadFallo] DECIMAL NOT NULL,
	[NombreProducto] VARCHAR(20) NOT NULL,
	[PrecioProducto] DECIMAL NOT NULL,
	[TiempoReparacion] DECIMAL NOT NULL,
	[Estado] INT NOT NULL,
	CONSTRAINT pk_maquina
		PRIMARY KEY ([Id])
)

CREATE TABLE Iteracion (
	[Id] INT IDENTITY NOT NULL,
	[IdSimulacion] INT NOT NULL,
	[IdMaquina] INT NOT NULL,
	[NumeroIteracion] INT NOT NULL,
	[CantidadProductos] INT NOT NULL,
	[EstadoMaquina] INT NOT NULL,
	CONSTRAINT pk_iteracion
		PRIMARY KEY ([Id])
)

CREATE TABLE RegistroFallas (
	[Id] INT IDENTITY NOT NULL,
	[IdMaquina] INT NOT NULL,
	[IdIteracion] INT NOT NULL,
	CONSTRAINT pk_registrofallas
		PRIMARY KEY ([Id])
)

CREATE TABLE RegistroReparaciones (
	[Id] INT IDENTITY NOT NULL,
	[IdMaquina] INT NOT NULL,
	[IdIteracion] INT NOT NULL,	
	CONSTRAINT pk_registroreparaciones
		PRIMARY KEY ([Id])
)