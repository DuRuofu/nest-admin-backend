import { DocumentBuilder } from "@nestjs/swagger";

	// swagger
	const swaggerOptions = new DocumentBuilder()
		.setTitle('Nest-Admin API')
		.setDescription('Nest-Admin项目的接口文档')
		.setVersion('1.0.0')
		.addBearerAuth()  
		.build();

export default swaggerOptions;
