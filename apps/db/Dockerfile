FROM postgres:alpine

COPY populate-users-tables.sql /docker-entrypoint-initdb.d
EXPOSE 5432