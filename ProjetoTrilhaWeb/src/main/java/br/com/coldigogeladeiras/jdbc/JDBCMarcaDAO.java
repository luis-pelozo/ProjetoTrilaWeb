package br.com.coldigogeladeiras.jdbc;

import br.com.coldigogeladeiras.jdbcinterface.MarcaDAO;
import br.com.coldigogeladeiras.modelo.Marca;

import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;

public class JDBCMarcaDAO extends MarcaDAO {
    private Connection conexao;
    public JDBCMarcaDAO(Connection conexao){
        this.conexao = conexao;
    }


}
