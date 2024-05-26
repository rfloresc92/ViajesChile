Plataforma de Reseña de Libros
Plataforma la cual permite escribir reseñas y dejar
calificaciones a nuestros libros favoritos
----------------------------------------------------------------
Home
![image](https://github.com/rfloresc92/ViajesChile/assets/156140625/18055595-e4a5-4518-b2f0-9ab6bfd5505b)

Inicio de Sesion
![image](https://github.com/rfloresc92/ViajesChile/assets/156140625/665a340d-1aa2-4ebb-a537-37ff15fd9ecb)

Libros
![image](https://github.com/rfloresc92/ViajesChile/assets/156140625/158d23c5-2200-406f-997f-01b7eacee9d1)
![image](https://github.com/rfloresc92/ViajesChile/assets/156140625/9f0dc118-f9f8-4ae0-ba02-3a9794a7a308)

Libro/id
![image](https://github.com/rfloresc92/ViajesChile/assets/156140625/dcd0535b-6879-45d4-a146-466b347ba4ef)

Prerrequisitos o Dependencias a Instalar:
- Windows 10
- Python 3.12
- PostgreSQL 14.10
- Django 5.0.6
- Crispy Bootstrap5 2024.2
- Google Fonts Roboto 400 - 700
- Boostrap Bundle Js v5.1.3
- Boostrap v5.1.3
- Kit FontAwesome

Creacion de ambiente Virtual
- #paso1 - instalar virtualenv en caso de no tenerlo
  pip install virtualenv
- #paso2 - crear ambiente virtual
  virtualenv venv (para crear el entorno virtual)
- #paso3 - activar ambiente virtual
  source ./venv/Scripts/activate
- #paso4 - instalar requirements
  pip install -r requirements.txt
----------------------------------------------------------------
Conexion a Base de datos:
----------------------------------------------------------------
Crear base de datos en Postgres con los siguientes datos:

  -'ENGINE': 'django.db.backends.postgresql',
  -'NAME': 'resena_libross',
  -'USER': 'postgres',
  -'PASSWORD': 'Chopli92.',
  -'HOST': 'localhost',
  -'PORT': '5432',
  
Django creara las tablas en la base de datos de la siguiente forma:

python manage.py makemigrations
python manage.py migrate

Datos semilla para Autores y Genero se encuentran en resena_libros.sql
libros fueron ingresados manualmente por la pagina como debe funcionar
con imagenes y descripcion correspondiente.
----------------------------------------------------------------
Para ejecutar el proyecto
----------------------------------------------------------------
python manage.py runserver
----------------------------------------------------------------
Credenciales de Acceso

Para Usuario Tipo Administrador
- Usuario: admin
- Contraseña: Abc123#

Para usuario Tipo Lector
- Email: lector@mail.com
- Contraseña: Abc123#
----------------------------------------------------------------
----------------------------------------------------------------
Autor
- Rubén Flores Cisternas
