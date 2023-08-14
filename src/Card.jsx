import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

const TaxCard = ({ name, rate, applied_to, applicable_items }) => {
    const navigate = useNavigate();

    console.log("appl", applicable_items)
    return (
        <Card sx={{ maxWidth: 300, margin: '1rem' }}>
            <CardContent>
                <Typography variant="h5" component="div">
                    {name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Rate: {rate}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Applied To: {applied_to}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Applicable Items:
                    {
                        applicable_items.map((id) => (
                            <Typography variant="body2" color="text.secondary">
                                {id}
                            </Typography>
                        ))
                    }
                </Typography>
                <Button
                    variant="contained"
                    color="primary"
                    sx={{
                        backgroundColor: "orangeRed",
                    }}
                    onClick={() => {
                        navigate("/Edit", {
                            state: { name, rate, applied_to, applicable_items }
                        });
                    }}
                >
                    Edit
                </Button>
            </CardContent>
        </Card>
    );
};

export default TaxCard;
