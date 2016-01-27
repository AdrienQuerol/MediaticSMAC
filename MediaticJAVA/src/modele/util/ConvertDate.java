package modele.util;

import java.time.LocalDate;
import java.sql.Date;
import javax.persistence.AttributeConverter;
import javax.persistence.Converter;

@Converter(autoApply = true)
public class ConvertDate implements AttributeConverter<LocalDate, Date> {

    public Date convertToDatabaseColumn(LocalDate date) {
        return Date.valueOf(date);
    }

    public LocalDate convertToEntityAttribute(Date value) {
        return value.toLocalDate();
    }
}