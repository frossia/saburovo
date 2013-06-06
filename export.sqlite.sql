
CREATE TABLE 'schema_migrations' ('version' varchar(255) NOT NULL);
INSERT INTO 'schema_migrations' VALUES('20130604083543');
INSERT INTO 'schema_migrations' VALUES('20130604083819');
INSERT INTO 'schema_migrations' VALUES('20130604084220');
INSERT INTO 'schema_migrations' VALUES('20130604084337');
INSERT INTO 'schema_migrations' VALUES('20130604084950');
INSERT INTO 'schema_migrations' VALUES('20130606094511');
INSERT INTO 'schema_migrations' VALUES('20130606095817');
INSERT INTO 'schema_migrations' VALUES('20130606095822');
INSERT INTO 'schema_migrations' VALUES('20130606095823');
CREATE TABLE 'posts' ('id' INTEGER PRIMARY KEY AUTO_INCREMENT NOT NULL, 'title' varchar(255), 'body' text, 'created_at' datetime NOT NULL, 'updated_at' datetime NOT NULL, 'category_id' integer, 'action' boolean, 'action_date' date);
INSERT INTO 'posts' VALUES(25,'TEST',X'54455354','2013-06-04 21:35:33.000000','2013-06-04 21:35:33.000000',NULL,NULL,NULL);
INSERT INTO 'posts' VALUES(26,'TEST2',X'5445535432','2013-06-04 22:28:38.000000','2013-06-04 22:28:38.000000',NULL,NULL,NULL);
CREATE TABLE 'categories' ('id' INTEGER PRIMARY KEY AUTO_INCREMENT NOT NULL, 'name' varchar(255), 'created_at' datetime NOT NULL, 'updated_at' datetime NOT NULL);
INSERT INTO 'categories' VALUES(1,'Муниципальное образование','2013-06-04 08:54:27.365817','2013-06-04 08:54:27.365817');
INSERT INTO 'categories' VALUES(2,'Совет депутатов','2013-06-04 08:54:46.423136','2013-06-04 08:54:46.423136');
INSERT INTO 'categories' VALUES(3,'Администрация','2013-06-04 10:04:35.086496','2013-06-04 10:04:35.086496');
INSERT INTO 'categories' VALUES(4,'Опека и попечительство','2013-06-04 10:05:50.602412','2013-06-04 10:05:50.602412');
INSERT INTO 'categories' VALUES(5,'Комиссия по делам несовершеннолетних','2013-06-04 10:06:15.046509','2013-06-04 10:06:15.046509');
INSERT INTO 'categories' VALUES(6,'Спорт и досуг','2013-06-04 10:07:03.299223','2013-06-04 10:07:03.299223');
INSERT INTO 'categories' VALUES(7,'Полномочия в сфере ЖКХ','2013-06-04 10:08:44.141941','2013-06-04 10:08:44.141941');
INSERT INTO 'categories' VALUES(8,'МБУ «Центр досуга и спорта Вертикаль»','2013-06-04 10:13:29.703757','2013-06-04 10:13:29.703757');
INSERT INTO 'categories' VALUES(9,'Молодежная общественная палата','2013-06-04 10:14:25.740769','2013-06-04 10:14:25.740769');
INSERT INTO 'categories' VALUES(10,'Военно-патриотическое воспитание','2013-06-04 10:14:34.775437','2013-06-04 10:14:34.775437');
INSERT INTO 'categories' VALUES(11,'Призыв на военную службу','2013-06-04 10:15:10.009934','2013-06-04 10:15:10.009934');
INSERT INTO 'categories' VALUES(12,'Страница Ветеранов ВОВ','2013-06-04 10:16:03.485618','2013-06-04 10:16:03.485618');
CREATE TABLE 'admins' ('id' INTEGER PRIMARY KEY AUTO_INCREMENT NOT NULL, 'email' varchar(255) DEFAULT '' NOT NULL, 'encrypted_password' varchar(255) DEFAULT '' NOT NULL, 'reset_password_token' varchar(255), 'reset_password_sent_at' datetime, 'remember_created_at' datetime, 'sign_in_count' integer DEFAULT 0, 'current_sign_in_at' datetime, 'last_sign_in_at' datetime, 'current_sign_in_ip' varchar(255), 'last_sign_in_ip' varchar(255), 'created_at' datetime NOT NULL, 'updated_at' datetime NOT NULL);
INSERT INTO 'admins' VALUES(1,'frossiacsb@gmail.com','$2a$10$8MOw9aQGYnhwgyI.JFnC0.YD/sHWIfA06VTP/Pk7L8mia3OLb5P7O',NULL,NULL,NULL,2,'2013-06-06 09:52:25.881002','2013-06-04 08:46:21.855244','127.0.0.1','127.0.0.1','2013-06-04 08:46:21.825479','2013-06-06 09:52:25.882236');
CREATE TABLE 'rails_admin_histories' ('id' INTEGER PRIMARY KEY AUTO_INCREMENT NOT NULL, 'message' text, 'username' varchar(255), 'item' integer, 'table' varchar(255), 'month' integer(2), 'year' integer(5), 'created_at' datetime NOT NULL, 'updated_at' datetime NOT NULL);
CREATE TABLE 'admin_users' ('id' INTEGER PRIMARY KEY AUTO_INCREMENT NOT NULL, 'email' varchar(255) DEFAULT '' NOT NULL, 'encrypted_password' varchar(255) DEFAULT '' NOT NULL, 'reset_password_token' varchar(255), 'reset_password_sent_at' datetime, 'remember_created_at' datetime, 'sign_in_count' integer DEFAULT 0, 'current_sign_in_at' datetime, 'last_sign_in_at' datetime, 'current_sign_in_ip' varchar(255), 'last_sign_in_ip' varchar(255), 'created_at' datetime NOT NULL, 'updated_at' datetime NOT NULL);
INSERT INTO 'admin_users' VALUES(1,'admin@example.com','$2a$10$37zSSeqlTRoj/tUR4DWjQ.sK6D7HbKBN2SSTOt3cSL0RV.VF2dO4q',NULL,NULL,NULL,2,'2013-06-06 15:57:40.350959','2013-06-06 10:08:01.033610','127.0.0.1','127.0.0.1','2013-06-06 10:05:10.704213','2013-06-06 15:57:40.363330');
INSERT INTO 'admin_users' VALUES(2,'frossiacsb@gmail.com','$2a$10$i53rH5OaiEpJmTTzjbyCGOC.GtaniVXceCnSJTd2uCfpVW4kXTO/S',NULL,NULL,NULL,1,'2013-06-06 10:08:47.148542','2013-06-06 10:08:47.148542','127.0.0.1','127.0.0.1','2013-06-06 10:08:30.641374','2013-06-06 10:08:47.149249');
CREATE TABLE 'active_admin_comments' ('id' INTEGER PRIMARY KEY AUTO_INCREMENT NOT NULL, 'resource_id' varchar(255) NOT NULL, 'resource_type' varchar(255) NOT NULL, 'author_id' integer, 'author_type' varchar(255), 'body' text, 'created_at' datetime NOT NULL, 'updated_at' datetime NOT NULL, 'namespace' varchar(255));

CREATE UNIQUE INDEX 'unique_schema_migrations' ON 'schema_migrations' ('version');
CREATE UNIQUE INDEX 'index_admins_on_email' ON 'admins' ('email');
CREATE UNIQUE INDEX 'index_admins_on_reset_password_token' ON 'admins' ('reset_password_token');
CREATE INDEX 'index_rails_admin_histories' ON 'rails_admin_histories' ('item', 'table', 'month', 'year');
CREATE UNIQUE INDEX 'index_admin_users_on_email' ON 'admin_users' ('email');
CREATE UNIQUE INDEX 'index_admin_users_on_reset_password_token' ON 'admin_users' ('reset_password_token');
CREATE INDEX 'index_admin_notes_on_resource_type_and_resource_id' ON 'active_admin_comments' ('resource_type', 'resource_id');
CREATE INDEX 'index_active_admin_comments_on_namespace' ON 'active_admin_comments' ('namespace');
CREATE INDEX 'index_active_admin_comments_on_author_type_and_author_id' ON 'active_admin_comments' ('author_type', 'author_id');


CREATE TABLE 'schema_migrations' ('version' varchar(255) NOT NULL);
INSERT INTO 'schema_migrations' VALUES('20130604083543');
INSERT INTO 'schema_migrations' VALUES('20130604083819');
INSERT INTO 'schema_migrations' VALUES('20130604084220');
INSERT INTO 'schema_migrations' VALUES('20130604084337');
INSERT INTO 'schema_migrations' VALUES('20130604084950');
INSERT INTO 'schema_migrations' VALUES('20130606094511');
INSERT INTO 'schema_migrations' VALUES('20130606095817');
INSERT INTO 'schema_migrations' VALUES('20130606095822');
INSERT INTO 'schema_migrations' VALUES('20130606095823');
CREATE TABLE 'posts' ('id' INTEGER PRIMARY KEY AUTO_INCREMENT NOT NULL, 'title' varchar(255), 'body' text, 'created_at' datetime NOT NULL, 'updated_at' datetime NOT NULL, 'category_id' integer, 'action' boolean, 'action_date' date);
INSERT INTO 'posts' VALUES(1,'История','<font color='#FF0000'>Whether</font> you are using Scss or CSS, we''ve made it easy to start a project so that you can help take over the world one responsive site at a time.

Foundation is developed in Sass, which is powerful CSS pre-processor that helps you write cleaner, more organized, CSS that you can more easily maintain over time without the typical headaches of vanilla.<hr class='read_more'>
 On top of our minimal styling, we''ve written powerful Javascript plugins that will make useful interactions easier to implement across screen sizes.

Looking for Foundation 3?
We''re still supporting Foundation 3 for those who don''t want to take the leap into the future with us. You can view the docs, download a package or visit the Github page.','2013-06-04 08:54:09.690060','2013-06-05 15:12:10.990667',1,NULL,NULL);
INSERT INTO 'posts' VALUES(2,'Общие сведения о муниципальном образовании','You can access the session for this scope:

user_session
After signing in a user, confirming the account or updating the password
<hr class='read_more'>
Devise will look for a scoped root path to redirect. Example: For a :user resource, it will use user_root_path if it exists, otherwise default root_path will be used. This means that you need to set the root inside your routes:','2013-06-04 08:55:15.605467','2013-06-05 15:57:21.646362',1,NULL,NULL);
INSERT INTO 'posts' VALUES(3,'Символика<hr>','Символика','2013-06-04 11:44:46.366940','2013-06-05 07:29:49.778756',1,NULL,NULL);
INSERT INTO 'posts' VALUES(4,'Характеристика района – социально-экономический паспорт','Муниципальное образование - городское, сельское поселение или иная территория, на которой в соответствии с законом осуществляется местное самоуправление, действуют выборные и иные органы местного самоуправления.','2013-06-04 11:45:07.380157','2013-06-04 11:45:07.380157',1,NULL,NULL);
INSERT INTO 'posts' VALUES(5,'Карта района с нанесенными объектами социальной сферы','Карта района с нанесенными объектами социальной сферы','2013-06-04 11:45:22.725839','2013-06-04 11:45:22.725839',1,NULL,NULL);
INSERT INTO 'posts' VALUES(6,'Председатель Совета депутатов','Председатель Совета депутатов','2013-06-04 11:45:46.036063','2013-06-04 11:45:46.036063',2,NULL,NULL);
INSERT INTO 'posts' VALUES(7,'О Совете депутатов','О Совете депутатов','2013-06-04 11:46:05.668704','2013-06-04 11:46:05.668704',2,NULL,NULL);
INSERT INTO 'posts' VALUES(8,'Комиссии Совета депутатов','Комиссии Совета депутатов','2013-06-04 11:46:19.381640','2013-06-04 11:46:19.381640',2,NULL,NULL);
INSERT INTO 'posts' VALUES(9,'Депутаты','Депутаты','2013-06-04 11:46:39.190367','2013-06-04 11:46:39.190367',2,NULL,NULL);
INSERT INTO 'posts' VALUES(10,'График приема населения','График приема населения','2013-06-04 11:46:43.688097','2013-06-04 11:46:43.688097',2,NULL,NULL);
INSERT INTO 'posts' VALUES(11,'Глава Администрации муниципального округа','Глава Администрации муниципального округа','2013-06-04 11:47:12.960293','2013-06-04 11:47:12.960293',3,NULL,NULL);
INSERT INTO 'posts' VALUES(12,'Сотрудники','Сотрудники','2013-06-04 11:48:03.398741','2013-06-04 11:48:03.398741',3,NULL,NULL);
INSERT INTO 'posts' VALUES(13,'Структура администрации','Структура администрации','2013-06-04 11:48:14.930624','2013-06-04 11:48:14.930624',3,NULL,NULL);
INSERT INTO 'posts' VALUES(14,'Прием населения','Прием населения','2013-06-04 11:48:48.823589','2013-06-04 11:48:48.823589',4,NULL,NULL);
INSERT INTO 'posts' VALUES(15,'Нормативно-правовые акты','Нормативно-правовые акты','2013-06-04 11:49:01.712780','2013-06-04 11:49:01.712780',4,NULL,NULL);
INSERT INTO 'posts' VALUES(16,'Закон КДН','Закон КДН
','2013-06-04 11:49:16.435246','2013-06-04 11:49:16.435246',5,NULL,NULL);
INSERT INTO 'posts' VALUES(17,'Положение о КДН','Положение о КДН','2013-06-04 11:49:28.475072','2013-06-04 11:49:28.475072',5,NULL,NULL);
INSERT INTO 'posts' VALUES(18,'О спорте и досуге','О спорте и досуге','2013-06-04 11:49:41.906499','2013-06-04 11:49:41.906499',6,NULL,NULL);
INSERT INTO 'posts' VALUES(19,'Спорткомплексы','Спорткомплексы','2013-06-04 11:49:52.705192','2013-06-04 11:49:52.705192',6,NULL,NULL);
INSERT INTO 'posts' VALUES(20,'Спортивные дворовые площадки','Спортивные дворовые площадки','2013-06-04 11:50:06.450721','2013-06-04 11:50:06.450721',6,NULL,NULL);
INSERT INTO 'posts' VALUES(21,'Полномочия в сфере ЖКХ','<font color='#cc0000'>Полномочия в сфере ЖКХ</font>','2013-06-04 11:50:39.911167','2013-06-05 07:19:17.842316',7,NULL,NULL);
INSERT INTO 'posts' VALUES(22,'О центре','О центре','2013-06-04 11:51:20.132101','2013-06-04 11:51:20.132101',8,NULL,NULL);
INSERT INTO 'posts' VALUES(23,'Устав','Устав','2013-06-04 11:51:36.930982','2013-06-04 11:51:36.930982',8,NULL,NULL);
INSERT INTO 'posts' VALUES(24,'Сотрудники','Сотрудники','2013-06-04 11:51:50.419731','2013-06-04 11:51:50.419731',8,NULL,NULL);
INSERT INTO 'posts' VALUES(25,'TEST','TEST','2013-06-04 21:35:33.018337','2013-06-04 21:35:33.018337',1,NULL,NULL);
INSERT INTO 'posts' VALUES(26,'TEST2','TEST2','2013-06-04 22:28:38.982532','2013-06-04 22:28:38.982532',5,NULL,NULL);
CREATE TABLE 'categories' ('id' INTEGER PRIMARY KEY AUTO_INCREMENT NOT NULL, 'name' varchar(255), 'created_at' datetime NOT NULL, 'updated_at' datetime NOT NULL);
INSERT INTO 'categories' VALUES(1,'Муниципальное образование','2013-06-04 08:54:27.365817','2013-06-04 08:54:27.365817');
INSERT INTO 'categories' VALUES(2,'Совет депутатов','2013-06-04 08:54:46.423136','2013-06-04 08:54:46.423136');
INSERT INTO 'categories' VALUES(3,'Администрация','2013-06-04 10:04:35.086496','2013-06-04 10:04:35.086496');
INSERT INTO 'categories' VALUES(4,'Опека и попечительство','2013-06-04 10:05:50.602412','2013-06-04 10:05:50.602412');
INSERT INTO 'categories' VALUES(5,'Комиссия по делам несовершеннолетних','2013-06-04 10:06:15.046509','2013-06-04 10:06:15.046509');
INSERT INTO 'categories' VALUES(6,'Спорт и досуг','2013-06-04 10:07:03.299223','2013-06-04 10:07:03.299223');
INSERT INTO 'categories' VALUES(7,'Полномочия в сфере ЖКХ','2013-06-04 10:08:44.141941','2013-06-04 10:08:44.141941');
INSERT INTO 'categories' VALUES(8,'МБУ «Центр досуга и спорта Вертикаль»','2013-06-04 10:13:29.703757','2013-06-04 10:13:29.703757');
INSERT INTO 'categories' VALUES(9,'Молодежная общественная палата','2013-06-04 10:14:25.740769','2013-06-04 10:14:25.740769');
INSERT INTO 'categories' VALUES(10,'Военно-патриотическое воспитание','2013-06-04 10:14:34.775437','2013-06-04 10:14:34.775437');
INSERT INTO 'categories' VALUES(11,'Призыв на военную службу','2013-06-04 10:15:10.009934','2013-06-04 10:15:10.009934');
INSERT INTO 'categories' VALUES(12,'Страница Ветеранов ВОВ','2013-06-04 10:16:03.485618','2013-06-04 10:16:03.485618');
CREATE TABLE 'admins' ('id' INTEGER PRIMARY KEY AUTO_INCREMENT NOT NULL, 'email' varchar(255) DEFAULT '' NOT NULL, 'encrypted_password' varchar(255) DEFAULT '' NOT NULL, 'reset_password_token' varchar(255), 'reset_password_sent_at' datetime, 'remember_created_at' datetime, 'sign_in_count' integer DEFAULT 0, 'current_sign_in_at' datetime, 'last_sign_in_at' datetime, 'current_sign_in_ip' varchar(255), 'last_sign_in_ip' varchar(255), 'created_at' datetime NOT NULL, 'updated_at' datetime NOT NULL);
INSERT INTO 'admins' VALUES(1,'frossiacsb@gmail.com','$2a$10$8MOw9aQGYnhwgyI.JFnC0.YD/sHWIfA06VTP/Pk7L8mia3OLb5P7O',NULL,NULL,NULL,2,'2013-06-06 09:52:25.881002','2013-06-04 08:46:21.855244','127.0.0.1','127.0.0.1','2013-06-04 08:46:21.825479','2013-06-06 09:52:25.882236');
CREATE TABLE 'rails_admin_histories' ('id' INTEGER PRIMARY KEY AUTO_INCREMENT NOT NULL, 'message' text, 'username' varchar(255), 'item' integer, 'table' varchar(255), 'month' integer(2), 'year' integer(5), 'created_at' datetime NOT NULL, 'updated_at' datetime NOT NULL);
CREATE TABLE 'admin_users' ('id' INTEGER PRIMARY KEY AUTO_INCREMENT NOT NULL, 'email' varchar(255) DEFAULT '' NOT NULL, 'encrypted_password' varchar(255) DEFAULT '' NOT NULL, 'reset_password_token' varchar(255), 'reset_password_sent_at' datetime, 'remember_created_at' datetime, 'sign_in_count' integer DEFAULT 0, 'current_sign_in_at' datetime, 'last_sign_in_at' datetime, 'current_sign_in_ip' varchar(255), 'last_sign_in_ip' varchar(255), 'created_at' datetime NOT NULL, 'updated_at' datetime NOT NULL);
INSERT INTO 'admin_users' VALUES(1,'admin@example.com','$2a$10$37zSSeqlTRoj/tUR4DWjQ.sK6D7HbKBN2SSTOt3cSL0RV.VF2dO4q',NULL,NULL,NULL,1,'2013-06-06 10:08:01.033610','2013-06-06 10:08:01.033610','127.0.0.1','127.0.0.1','2013-06-06 10:05:10.704213','2013-06-06 10:08:01.034698');
INSERT INTO 'admin_users' VALUES(2,'frossiacsb@gmail.com','$2a$10$i53rH5OaiEpJmTTzjbyCGOC.GtaniVXceCnSJTd2uCfpVW4kXTO/S',NULL,NULL,NULL,1,'2013-06-06 10:08:47.148542','2013-06-06 10:08:47.148542','127.0.0.1','127.0.0.1','2013-06-06 10:08:30.641374','2013-06-06 10:08:47.149249');
CREATE TABLE 'active_admin_comments' ('id' INTEGER PRIMARY KEY AUTO_INCREMENT NOT NULL, 'resource_id' varchar(255) NOT NULL, 'resource_type' varchar(255) NOT NULL, 'author_id' integer, 'author_type' varchar(255), 'body' text, 'created_at' datetime NOT NULL, 'updated_at' datetime NOT NULL, 'namespace' varchar(255));

CREATE UNIQUE INDEX 'unique_schema_migrations' ON 'schema_migrations' ('version');
CREATE UNIQUE INDEX 'index_admins_on_email' ON 'admins' ('email');
CREATE UNIQUE INDEX 'index_admins_on_reset_password_token' ON 'admins' ('reset_password_token');
CREATE INDEX 'index_rails_admin_histories' ON 'rails_admin_histories' ('item', 'table', 'month', 'year');
CREATE UNIQUE INDEX 'index_admin_users_on_email' ON 'admin_users' ('email');
CREATE UNIQUE INDEX 'index_admin_users_on_reset_password_token' ON 'admin_users' ('reset_password_token');
CREATE INDEX 'index_admin_notes_on_resource_type_and_resource_id' ON 'active_admin_comments' ('resource_type', 'resource_id');
CREATE INDEX 'index_active_admin_comments_on_namespace' ON 'active_admin_comments' ('namespace');
CREATE INDEX 'index_active_admin_comments_on_author_type_and_author_id' ON 'active_admin_comments' ('author_type', 'author_id');

