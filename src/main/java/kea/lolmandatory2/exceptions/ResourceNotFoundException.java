package kea.lolmandatory2.exceptions;

/**
 * @author Julius Panduro
 */
public class ResourceNotFoundException extends RuntimeException {
    public ResourceNotFoundException(String message) {
        super(message);
    }
}
