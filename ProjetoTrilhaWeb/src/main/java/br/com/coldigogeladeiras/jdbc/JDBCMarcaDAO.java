package br.com.coldigogeladeiras.jdbc;

import br.com.coldigogeladeiras.jdbcinterface.MarcaDAO;
import br.com.coldigogeladeiras.modelo.Marca;

import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;

public class JDBCMarcaDAO implements MarcaDAO {
    private Connection conexao;
    public JDBCMarcaDAO(Connection conexao){

        this.conexao = conexao;
    }

    public List<Marca>buscar(){

        //Criação da instrução SQL para busca de todas as marcas
        String comando = "SELECT * FROM marcas";

        //Criação de uma lista para armazenar cada marca encontrada
        List<Marca>listaMarcas = new ArrayList<Marca>();

        //Criação do objeto marca com valor null(ou seja, sem instancia-lo)
        Marca marca = null;

        try{
            //Uso da conexão do banco para prepara-lo para uma instrução SQL
            Statement stmt = conexao.createStatement();

            //Execução da instrução criada previamente
            //e armazenamento do resultado no objeto rs
            ResultSet rs = stmt.executeQuery(comando);

            while (rs.next()){
                marca = new Marca();

                //Recebimento dos 2 dados retornados do BD  para cada linha encontrada
                int id = rs.getInt("id");
                String nome  = rs.getString("nome");

                //Settando no objeto marca os valores encontrados
                marca.setId(id);
                marca.setNome(nome);

                //Adição da instância contida no objeto Marca na Lista de marcas
                listaMarcas.add(marca);
            }

        }catch (Exception ex){
            //Caso alguma Exception não seja gerada no try, recebe-a no objeto "ex"
            ex.printStackTrace();
        }
        //Retorna para quem chamou o metodo a lista criada
        return listaMarcas;
    }

}
