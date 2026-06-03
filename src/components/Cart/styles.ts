    import styled from 'styled-components'

    export const Overlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
    z-index: 100;
    `

    export const CartContainer = styled.aside`
    position: fixed;
    top: 0;
    right: 0;
    width: 360px;
    height: 100%;
    background-color: #e66767;
    padding: 32px 8px;
    z-index: 101;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    overflow-y: auto;
    `

    export const CartItem = styled.div`
    display: flex;
    background-color: #fff8f2;
    padding: 8px;
    margin-bottom: 16px;
    position: relative;

    img {
        width: 80px;
        height: 80px;
        object-fit: cover;
        margin-right: 8px;
    }

    h3 {
        color: #e66767;
        font-size: 16px;
        font-weight: 900;
        margin-bottom: 8px;
        margin-top: 0;
    }

    p {
        color: #e66767;
        font-size: 14px;
        font-weight: 400;
        margin: 0;
    }

    button {
        position: absolute;
        bottom: 8px;
        right: 8px;
        width: 16px;
        height: 16px;
        background-color: transparent;
        border: none;
        cursor: pointer;
        padding: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: transform 0.2s ease;

        img {
        width: 16px;
        height: 16px;
        object-fit: contain;
        display: block;
        }

        &:hover {
        transform: scale(1.05);
        }
    }
    `

    export const ItemList = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
    overflow-y: auto;
    flex: 1;
    display: flex;
    flex-direction: column;
    `

    export const EmptyMessage = styled.p`
    color: #fff8f2;
    text-align: center;
    margin: 0;
    `

    export const TotalContainer = styled.div`
    display: flex;
    justify-content: space-between;
    color: #fff8f2;
    font-weight: 700;
    font-size: 14px;
    margin-top: 24px;
    margin-bottom: 16px;
    `

    export const CheckoutButton = styled.button<{ disabled?: boolean }>`
    background-color: #fff8f2;
    color: #e66767;
    border: none;
    padding: 8px;
    font-weight: 700;
    font-size: 14px;
    width: 100%;
    cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
    text-align: center;
    opacity: ${({ disabled }) => (disabled ? 0.7 : 1)};
    margin-bottom: 8px;
    `

    export const SecondaryButton = styled.button`
    background-color: #fff8f2;
    color: #e66767;
    border: none;
    padding: 8px;
    font-weight: 700;
    font-size: 14px;
    width: 100%;
    cursor: pointer;
    text-align: center;
    `

    export const FormTitle = styled.h2`
    color: #fff8f2;
    font-size: 16px;
    font-weight: 700;
    margin-bottom: 24px;
    `

    export const FormGroup = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 8px;

    label {
        color: #fff8f2;
        font-size: 14px;
        font-weight: 700;
        margin-bottom: 4px;
    }

    input {
        background-color: #fff8f2;
        border: none;
        padding: 8px;
        font-size: 14px;
        color: #333;
        width: 100%;

        &:focus {
        outline: 2px solid #c0392b;
        }
    }
    `

    export const FormRow = styled.div`
    display: flex;
    gap: 8px;
    margin-bottom: 0;
    `

    export const ConfirmationText = styled.p`
    color: #fff8f2;
    font-size: 14px;
    font-weight: 400;
    margin-bottom: 16px;
    line-height: 1.5;
    `

    export const ErrorMsg = styled.p`
    color: #fff0f0;
    font-size: 13px;
    margin-bottom: 8px;
    background-color: rgba(0, 0, 0, 0.15);
    padding: 8px;
    border-radius: 4px;
    `