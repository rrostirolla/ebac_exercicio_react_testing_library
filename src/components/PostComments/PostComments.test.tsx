import { fireEvent, render, screen } from '@testing-library/react';
import PostComment from '.';

describe('Teste para o componente PostComment', () => {
    it('Deve renderizar o componente corretamente', () => {
        render(<PostComment/>);
        expect(screen.getByText('Comentar')).toBeInTheDocument();
    });

    it('Deve adicionar dois comentários', () => {
        render(<PostComment/>);

        fireEvent.change(screen.getByTestId('comment-textarea'), {
            target: {
                value: 'Comentário 1 - teste',
            }
        });
        fireEvent.click(screen.getByTestId('comment-button'));
    
        fireEvent.change(screen.getByTestId('comment-textarea'), {
            target: {
                value: 'Comentário 2 - teste',
            }
        });
        fireEvent.click(screen.getByTestId('comment-button'));

        expect(screen.getAllByTestId('comment-element')).toHaveLength(2);
    });
});