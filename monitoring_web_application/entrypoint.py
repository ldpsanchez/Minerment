import os
import time

database = os.getenv("DATABASE", "postgres")
sql_host = os.getenv("SQL_HOST", "databases")
sql_port = os.getenv("SQL_PORT", "5432")
debug = os.getenv("DEBUG", "1")
host_port = 8080
host_ip = 0
scann_port = f"nc -z {sql_host} {sql_port}"
file_manage = "/usr/src/app/manage.py"
migrate = f"python {file_manage} migrate"
runserver = f"python {file_manage} runserver {host_ip}:{host_port}"

if (database == "postgres"):
    print("Escaneando puerto en busca de demonio...")
    os.system(scann_port)
    print("PostgreSQL started")
    time.sleep(1)
    print("Iniciando servicios...")
    """ print("Migrando base de datos")
    os.system(migrate)
    time.sleep(1) """
    print("Iniciando servidor de pruebas Django")
    os.system(runserver)
