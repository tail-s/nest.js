import { AuthService } from './auth.service';
import { AuthCredentialsDto } from './dto/auth-credential.dto';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    signUp(authcredentialsDto: AuthCredentialsDto): Promise<void>;
    signIn(authCredentialsDto: AuthCredentialsDto): Promise<string>;
}
