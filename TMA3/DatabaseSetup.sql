
DROP TABLE IF EXISTS slideshow;
CREATE TABLE slideshow
(
	Id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
	Name text NOT NULL,
	Url text NOT NULL,
	Description text
);

INSERT INTO slideshow (Name, Url, Description) Values("img1", "../shared/img/books/1984.png", "1984 by George Orwell");
INSERT INTO slideshow (Name, Url, Description) Values("img2", "../shared/img/books/animalfarm.png", "Animal Farm by George Orwell");
INSERT INTO slideshow (Name, Url, Description) Values("img3", "../shared/img/books/caseforchrist.png", "The Case for Christ by Lee Strobel");
INSERT INTO slideshow (Name, Url, Description) Values("img4", "../shared/img/books/catcherandtherye.png", "The Catcher and the Rye by J. D. Salinger");
INSERT INTO slideshow (Name, Url, Description) Values("img5", "../shared/img/books/comtedemonte-cristo.png", "Le Comte de Monte-Cristo by Alexandre Dumas");
INSERT INTO slideshow (Name, Url, Description) Values("img6", "../shared/img/books/darkterritory.png", "Dark Territory: The Secret History of Cyebr War by Fred Kaplan");
INSERT INTO slideshow (Name, Url, Description) Values("img7", "../shared/img/books/express.png", "Murder on the Orient Express by Agatha Christie");
INSERT INTO slideshow (Name, Url, Description) Values("img8", "../shared/img/books/ghostinthewires.png", "Ghost in the Wires by Kevin Mitnick");
INSERT INTO slideshow (Name, Url, Description) Values("img9", "../shared/img/books/horla.png", "Le Horla et autres contes fantastiques by Guy de Maupassent");
INSERT INTO slideshow (Name, Url, Description) Values("img10", "../shared/img/books/joyland.png", "Joyland by Stephen King");
INSERT INTO slideshow (Name, Url, Description) Values("img11", "../shared/img/books/llddz.png", "llddz by Jacques Lazure");
INSERT INTO slideshow (Name, Url, Description) Values("img12", "../shared/img/books/lovelybones.png", "The Lovely Bones by Alice Sebold");
INSERT INTO slideshow (Name, Url, Description) Values("img13", "../shared/img/books/odyssee.png", "L'Odyssee by Homere");
INSERT INTO slideshow (Name, Url, Description) Values("img14", "../shared/img/books/oldmanandthesea.png", "The Old Man and The Seas by Ernest Hemingway");
INSERT INTO slideshow (Name, Url, Description) Values("img15", "../shared/img/books/perksofbeingawallflower.png", "The Perks of Being a Wallflower by Stephen Chbosky");
INSERT INTO slideshow (Name, Url, Description) Values("img16", "../shared/img/books/poison_rouge.png", "Rouge Poison by Michele Marineau");
INSERT INTO slideshow (Name, Url, Description) Values("img17", "../shared/img/books/routedechilfa.png", "La Route de Chlifa");
INSERT INTO slideshow (Name, Url, Description) Values("img18", "../shared/img/books/security.png", "Security by Gina Wohsdorf");
INSERT INTO slideshow (Name, Url, Description) Values("img19", "../shared/img/books/stuxnet.png", "Coutdown to Zero Day by Kim Zetter");
INSERT INTO slideshow (Name, Url, Description) Values("img20", "../shared/img/books/theprince.png", "The Prince by Niccolo Machiavelli");
INSERT INTO slideshow (Name, Url, Description) Values("img20", "../shared/img/books/zeros.png", "Zeros by Chuck Wendig");

DROP TABLE IF EXISTS computers;
CREATE TABLE computers
(
	Id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
	Name text NOT NULL,
	Price double NOT NULL,
	ImageUrl text NOT NULL
);

INSERT INTO computers (Name, Price, ImageUrl) VALUES("Macbook Pro", 700.00, "../shared/img/computers/macbook.png");
INSERT INTO computers (Name, Price, ImageUrl) VALUES("Lenovo", 400.00, "../shared/img/computers/lenovo.png");
INSERT INTO computers (Name, Price, ImageUrl) VALUES("HP Notebook", 345.00, "../shared/img/computers/hp.png");

DROP TABLE IF EXISTS components;
CREATE TABLE components
(
	Id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
	Name text NOT NULL,
	Price double NOT NULL,
	ComponentType text NOT NULL,
	ImageUrl text NOT NULL,
	IsDefault int NOT NULL
);

INSERT INTO components (Name, Price, ComponentType, ImageUrl, IsDefault) VALUES("11 inch.", 100.05, "Display", "../shared/img/compparts/11.png", 0);
INSERT INTO components (Name, Price, ComponentType, ImageUrl, IsDefault) VALUES("13 inch.", 150.33, "Display", "../shared/img/compparts/13.png", 1);
INSERT INTO components (Name, Price, ComponentType, ImageUrl, IsDefault) VALUES("15 inch.", 200.99, "Display", "../shared/img/compparts/15.png", 0);

INSERT INTO components (Name, Price, ComponentType, ImageUrl, IsDefault) VALUES("HDD 256GB", 39.95, "Drive", "../shared/img/compparts/hdd256.png", 0);
INSERT INTO components (Name, Price, ComponentType, ImageUrl, IsDefault) VALUES("HDD 500GB", 50.00, "Drive", "../shared/img/compparts/hdd500.png", 1);
INSERT INTO components (Name, Price, ComponentType, ImageUrl, IsDefault) VALUES("HDD 750GB", 58.99, "Drive", "../shared/img/compparts/hdd750.png", 0);
INSERT INTO components (Name, Price, ComponentType, ImageUrl, IsDefault) VALUES("SSD 128GB", 68.75, "Drive", "../shared/img/compparts/ssd128.png", 0);
INSERT INTO components (Name, Price, ComponentType, ImageUrl, IsDefault) VALUES("SSD 256GB", 109.32, "Drive", "../shared/img/compparts/ssd256.png", 0);
INSERT INTO components (Name, Price, ComponentType, ImageUrl, IsDefault) VALUES("SSD 500GB", 179.99, "Drive", "../shared/img/compparts/ssd500.png", 0);

INSERT INTO components (Name, Price, ComponentType, ImageUrl, IsDefault) VALUES("4GB", 29.95, "Ram", "../shared/img/compparts/ram4.png", 0);
INSERT INTO components (Name, Price, ComponentType, ImageUrl, IsDefault) VALUES("8GB", 83.02, "Ram", "../shared/img/compparts/ram8.png",1);
INSERT INTO components (Name, Price, ComponentType, ImageUrl, IsDefault) VALUES("16GB", 129.10, "Ram", "../shared/img/compparts/ram16.png", 0);
INSERT INTO components (Name, Price, ComponentType, ImageUrl, IsDefault) VALUES("32GB", 300.75, "Ram", "../shared/img/compparts/ram32.png", 0);

INSERT INTO components (Name, Price, ComponentType, ImageUrl, IsDefault) VALUES("Intel i3", 101.99, "Cpu", "../shared/img/compparts/i3.png", 0);
INSERT INTO components (Name, Price, ComponentType, ImageUrl, IsDefault) VALUES("Intel i5", 179.25, "Cpu", "../shared/img/compparts/i5.png",1);
INSERT INTO components (Name, Price, ComponentType, ImageUrl, IsDefault) VALUES("Intel i7", 253.97, "Cpu", "../shared/img/compparts/i7.png", 0);

INSERT INTO components (Name, Price, ComponentType, ImageUrl, IsDefault) VALUES("Windows 7", 18.99, "Os", "../shared/img/compparts/win7.png",1);
INSERT INTO components (Name, Price, ComponentType, ImageUrl, IsDefault) VALUES("Windows 10", 45.70, "Os", "../shared/img/compparts/win10.png", 0);
INSERT INTO components (Name, Price, ComponentType, ImageUrl, IsDefault) VALUES("Mac High Sierra", 50.98, "Os", "../shared/img/compparts/macsierra.png", 0);
INSERT INTO components (Name, Price, ComponentType, ImageUrl, IsDefault) VALUES("Ubuntu 17.10", 10.65, "Os", "../shared/img/compparts/ubuntu.png", 0);

DROP TABLE IF EXISTS orders;
DROP TABLE IF EXISTS customers;
CREATE TABLE customers
(
	Id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
	Username text NOT NULL,
	Password text NOT NULL
);

CREATE TABLE orders
(
	Id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
	Price decimal NOT NULL, 
	Detail text NOT NULL,
	ImageUrl text NOT NULL,
	Qty int NOT NULL,
	CustomerId int NOT NULL,
	ComponentId int,
	ComputerId int,
	FOREIGN KEY (CustomerId) REFERENCES customers(Id)
);