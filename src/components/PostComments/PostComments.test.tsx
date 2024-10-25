import { fireEvent, render, screen } from '@testing-library/react';
import PostComments from './index'; 

describe('Teste para o componente PostComments', () => {
    it('Deve renderizar o componente corretamente', () => {
        render(<PostComments />);
        expect(screen.getByText('Comentar')).toBeInTheDocument(); // Certifique-se de que 'Comentar' está em algum lugar do seu componente
    });

    it('Deve adicionar dois comentários', () => {
        render(<PostComments />);

        const commentInput = screen.getByTestId('comment-input');
        const submitButton = screen.getByTestId('submit-button');

        // Insere o primeiro comentário
        fireEvent.change(commentInput, { target: { value: 'Primeiro comentário' } });
        fireEvent.click(submitButton);

        // Verifica se o primeiro comentário foi adicionado
        expect(screen.getByText('Primeiro comentário')).toBeInTheDocument();

        // Insere o segundo comentário
        fireEvent.change(commentInput, { target: { value: 'Segundo comentário' } });
        fireEvent.click(submitButton);

        // Verifica se o segundo comentário foi adicionado
        expect(screen.getByText('Segundo comentário')).toBeInTheDocument();
    });
});
