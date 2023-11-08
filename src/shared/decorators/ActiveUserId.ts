import { ExecutionContext, UnauthorizedException, createParamDecorator } from "@nestjs/common";

// data é qualquer valor que eu quero enviar para o decorator
export const ActiveUSerId = createParamDecorator<undefined>((data, context: ExecutionContext) => {
    const request = context.switchToHttp().getRequest();
    const userId = request.userId

    if (!userId) {
        throw new UnauthorizedException();
    }

    return { userId: request.userId };
});