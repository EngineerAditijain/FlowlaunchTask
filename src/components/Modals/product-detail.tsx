import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Product } from '@/app/page';


interface ProductDetailProps {
    product: Product | null;
    open: boolean;
    onClose: () => void;
}

const ProductDetail: React.FC<ProductDetailProps> = ({ product, open, onClose }) => {
    if (!product) {
        return null;
    }

    return (
        <Dialog
            open={open}
            onClose={onClose}
            aria-labelledby="product-dialog-title"
            aria-describedby="product-dialog-description"
            fullWidth
            maxWidth="md"
            className='custom-scrollbar border'

        >
            <div className='flex flex-col bg-[#1B1D20] text-white justify-center items-center  custom-scrollbar '>
                <DialogTitle id="product-dialog-title">
                    {product.title}
                </DialogTitle>
                <DialogContent className='text-white'>
                    <div className='flex flex-row justify-center items-center text-white'>
                        <img src={product.image} alt={product.title} className="  mb-4 w-[50%]  " height={"100px"} />
                    </div>
                    <DialogContentText id="product-dialog-description" className='text-white'>
                        <span style={{ color: "white" }}>
                            <strong>Category:</strong> {product.category}
                        </span>
                    </DialogContentText>
                    <DialogContentText id="product-dialog-description">
                        <span style={{ color: "white" }}>
                            <strong>Description:</strong> {product.description}
                        </span>
                    </DialogContentText>
                    <DialogContentText id="product-dialog-description">
                        <span style={{ color: "white" }}>
                            <strong>Price:</strong> {product.price}
                        </span>
                    </DialogContentText>
                </DialogContent>
                <DialogActions sx={{justifyContent:"flex-end", display:"flex", flexDirection:"row"}} className='w-full'>
                    <Button onClick={onClose} variant='contained'>Close</Button>
                </DialogActions>
            </div>
        </Dialog>
    );
};

export default ProductDetail;
