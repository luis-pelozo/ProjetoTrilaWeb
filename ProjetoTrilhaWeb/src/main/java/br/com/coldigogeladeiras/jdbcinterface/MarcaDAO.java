package br.com.coldigogeladeiras.jdbcinterface;

import br.com.coldigogeladeiras.modelo.Marca;
import java.util.List;

public interface MarcaDAO {
    public List<Marca> buscar();
}

