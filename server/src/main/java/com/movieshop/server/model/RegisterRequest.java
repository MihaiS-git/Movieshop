package com.movieshop.server.model;

import com.movieshop.server.domain.Role;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
public class RegisterRequest {

    @Email(message = "Invalid email format")
    @NotBlank(message = "Email cannot be blank")
    private String email;

    @NotBlank(message = "Password cannot be blank")
    private String password;

    @NotNull(message = "Role is required")
    private Role role;

    private String name;

    private String picture;

    public RegisterRequest(String email, String password, String name, String picture) {
        this.email = email;
        this.password = password;
        this.role = Role.CUSTOMER;
        this.name = name;
        this.picture = picture;
    }
}
