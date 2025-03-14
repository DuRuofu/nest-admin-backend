import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { ConfigKey } from 'src/config/common.config';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
	constructor(
		protected configService: ConfigService,
	) {
		super({
			jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
			ignoreExpiration: false,
			secretOrKey: configService.get<string>(ConfigKey.JWT_SECRET)
		});
	}

	async validate(payload: any) {
		return { userId: payload.sub, username: payload.username };
	}
}
