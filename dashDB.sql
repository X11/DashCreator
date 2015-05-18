
/************ Update: Tables ***************/

/******************** Add Table: "layouts" ************************/

/* Build Table Structure */
CREATE TABLE "layouts"
(
	id INTEGER AUTO_INCREMENT NOT NULL,
	`name` VARCHAR(255) NOT NULL,
	layout TEXT NOT NULL
);

/* Add Primary Key */
ALTER TABLE "layouts" ADD CONSTRAINT pklayouts
	PRIMARY KEY ("id");


/******************** Add Table: "user_options" ************************/

/* Build Table Structure */
CREATE TABLE "user_options"
(
	"id" INTEGER AUTO_INCREMENT NOT NULL,
	users_id INTEGER NOT NULL,
	background_color VARCHAR(255) NOT NULL,
	base_color VARCHAR(255) NOT NULL,
	secondary_color VARCHAR(255) NOT NULL,
	font_family VARCHAR(255) NOT NULL,
	layout_id INTEGER NOT NULL
);

/* Add Primary Key */
ALTER TABLE "user_options" ADD CONSTRAINT pkuser_options
	PRIMARY KEY ("id");


/******************** Add Table: "user_pages" ************************/

/* Build Table Structure */
CREATE TABLE "user_pages"
(
	"id" INTEGER AUTO_INCREMENT NOT NULL,
	users_id INTEGER NOT NULL,
	content TEXT NOT NULL,
	created_at TIMESTAMP NOT NULL
);

/* Add Primary Key */
ALTER TABLE "user_pages" ADD CONSTRAINT pkuser_pages
	PRIMARY KEY ("id");


/******************** Add Table: "user_widget" ************************/

/* Build Table Structure */
CREATE TABLE "user_widget"
(
	"id" INTEGER AUTO_INCREMENT NOT NULL,
	users_id INTEGER NOT NULL,
	widgets_id INTEGER NOT NULL,
	position INTEGER NOT NULL,
	created_at TIMESTAMP NOT NULL
);

/* Add Primary Key */
ALTER TABLE "user_widget" ADD CONSTRAINT pkuser_widget
	PRIMARY KEY ("id");


/******************** Add Table: "users" ************************/

/* Build Table Structure */
CREATE TABLE "users"
(
	"id" INTEGER AUTO_INCREMENT NOT NULL,
	"usersName" VARCHAR(50) NOT NULL,
	password VARCHAR(255) NOT NULL,
	email VARCHAR(255) NOT NULL,
	token VARCHAR(255) NOT NULL,
	created_at TIMESTAMP NOT NULL
);

/* Add Primary Key */
ALTER TABLE "users" ADD CONSTRAINT pkusers
	PRIMARY KEY ("id");


/******************** Add Table: "widgets" ************************/

/* Build Table Structure */
CREATE TABLE "widgets"
(
	"id" INTEGER DEFAULT nextval('"schemaA"."users_Id_seq"'::regclass) NOT NULL,
	name VARCHAR(255) NOT NULL,
	folder_name VARCHAR(255) NOT NULL
);

/* Add Primary Key */
ALTER TABLE "widgets" ADD CONSTRAINT pkwidgets
	PRIMARY KEY ("id");





/************ Add Foreign Keys ***************/

/* Add Foreign Key: fk_user_options_layouts */
ALTER TABLE "user_options" ADD CONSTRAINT fk_user_options_layouts
	FOREIGN KEY (layout_id) REFERENCES "layouts" ("id")
	ON UPDATE NO ACTION ON DELETE NO ACTION;

/* Add Foreign Key: fk_user_options_users */
ALTER TABLE "user_options" ADD CONSTRAINT fk_user_options_users
	FOREIGN KEY (users_id) REFERENCES "users" ("id")
	ON UPDATE NO ACTION ON DELETE NO ACTION;

/* Add Foreign Key: fk_user_pages_users */
ALTER TABLE "user_widget" ADD CONSTRAINT fk_user_pages_users
	FOREIGN KEY (users_id) REFERENCES "users" ("id")
	ON UPDATE NO ACTION ON DELETE NO ACTION;

/* Add Foreign Key: fk_user_pages_widgets */
ALTER TABLE "user_widget" ADD CONSTRAINT fk_user_pages_widgets
	FOREIGN KEY (widgets_id) REFERENCES "widgets" ("id")
	ON UPDATE NO ACTION ON DELETE NO ACTION;
